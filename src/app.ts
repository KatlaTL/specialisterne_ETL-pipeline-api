import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from "@as-integrations/express5";
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger/swagger";

dotenv.config();

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  const app = express();
  app.use(express.json());

  // Routes
  app.use("/api", routes);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    swaggerOptions: {
      operationsSorter: "none",
      tagsSorter: "none",
    },
  }));

  app.use("/graphql", express.json(), expressMiddleware(server));

  // Basic route
  app.get("/", (req: Request, res: Response) => {
    res.send("You can view the API Swagger documentation at /api-docs");
  });

  // Start server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch(err => {
  console.error("Error starting server:", err);
});