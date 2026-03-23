import { PrismaClientType } from "../types/prismaTypes"

export const createDs18b20Service = (db: PrismaClientType) => ({
    fetchAllDs18b20Readings: async () => {
        return db.dS18B20.findMany()
    }
})
