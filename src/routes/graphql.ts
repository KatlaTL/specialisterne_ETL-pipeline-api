import { Router } from "express";

const router = Router();

/**
 * @openapi
 * /graphql:
 *   post:
 *     summary: GraphQL endpoint
 *     description: |
 *       Use Apollo Sandbox or GraphQL clients to explore the GraphQL schema.
 *       Example query:
 *       ```graphql
 *       query ExampleQuery {
 *           DMIReadings(limit: 5) {
 *               value
 *           }
 *           BME280Readings(limit: 10) {
 *               humidity
 *               location
 *               pressure
 *           }
 *       }
 *
 *       ```
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               query:
 *                 type: string
 *     responses:
 *       200:
 *         description: GraphQL response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
export default router;