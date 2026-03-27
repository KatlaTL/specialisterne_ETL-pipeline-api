"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("../generated/client");
if (!process.env.DATABASE_URL) {
    throw new Error("PRISMA_DIRECT_TCP_URL is not set in your .env file");
}
const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new adapter_pg_1.PrismaPg({
    connectionString: connectionString
});
const prisma = new client_1.PrismaClient({ adapter });
exports.default = prisma;
