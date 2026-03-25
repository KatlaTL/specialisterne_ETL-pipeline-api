import { PrismaClientType } from "../types/prismaTypes"
import { createService } from "./factory/createService"

export const createDs18b20Service = (db: PrismaClientType) => ({
    ...createService(db, "dS18B20")
})
