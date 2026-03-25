import { PrismaClientType } from "../types/prismaTypes"
import { createService } from "./factory/createService"

export const createScd41Service = (db: PrismaClientType) => ({
    ...createService(db, "sCD41")
})
