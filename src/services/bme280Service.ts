import { ApiQueryType } from "../types/apiTypes"
import { PrismaClientType } from "../types/prismaTypes"
import { createService } from "./factory/createService"

export const createBme280Service = (db: PrismaClientType) => ({
    ...createService(db, "bME280")
})
