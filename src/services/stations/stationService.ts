import { PrismaClientType, LowercasePrismaModelKeys } from "../../types/prismaTypes";

export const createStationService = (db: PrismaClientType) => ({
    fetchAllStations: async () => {
        return await db.$queryRaw<{
            station: string
        }[]>`SELECT tablename as station FROM pg_tables WHERE schemaname='public';`;
    },
    fetchStation: async <K extends LowercasePrismaModelKeys>(tablename: K) => {
        return (await db.$queryRaw<{
            station: string
        }[]>`SELECT tablename as station FROM pg_tables WHERE schemaname='public' AND tablename = ${tablename.toUpperCase()};`)[0];
    }
}) 