"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const server_1 = require("@apollo/server");
const express5_1 = require("@as-integrations/express5");
const schema_1 = require("./graphql/schema");
const resolvers_1 = require("./graphql/resolvers");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("./swagger/swagger"));
dotenv_1.default.config();
const startServer = async () => {
    const server = new server_1.ApolloServer({
        typeDefs: schema_1.typeDefs,
        resolvers: resolvers_1.resolvers,
    });
    await server.start();
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    // Routes
    app.use("/api", routes_1.default);
    app.use("/graphql", express_1.default.json(), (0, express5_1.expressMiddleware)(server));
    // Swagger API docs
    app.use("/", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default, {
        swaggerOptions: {
            operationsSorter: "none",
            tagsSorter: "none",
        },
    }));
    // Start server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
};
startServer().catch(err => {
    console.error("Error starting server:", err);
});
