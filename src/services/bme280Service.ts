import { PrismaClientType } from "../types/prismaTypes"

export const createBme280Service = (db: PrismaClientType) => ({
    fetchAllBme280Readings: async () => {
        return db.bME280.findMany()
    }
})
