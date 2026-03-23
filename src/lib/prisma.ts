import 'dotenv/config';
import { PrismaPg  } from "@prisma/adapter-pg";
import { PrismaClient } from '../generated/client';
import { PrismaClientType } from '../types/prismaTypes';

if (!process.env.DATABASE_URL) {
    throw new Error("PRISMA_DIRECT_TCP_URL is not set in your .env file");
}

const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({
    connectionString: connectionString
});

const prisma = new PrismaClient({ adapter }) as PrismaClientType;

export default prisma;