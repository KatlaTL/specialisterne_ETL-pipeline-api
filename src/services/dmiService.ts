import { PrismaClientType } from "../types/prismaTypes";
import { createService } from "./factory/createService";

export const createDmiService = (db: PrismaClientType) => ({
    ...createService(db, "dMI")
})
