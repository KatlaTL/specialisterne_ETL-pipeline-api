import { PrismaClientType } from "../types/prismaTypes"

export const createScd41Service = (db: PrismaClientType) => ({
    fetchAllScd41Readings: async () => {
        return db.sCD41.findMany()
    }
})
