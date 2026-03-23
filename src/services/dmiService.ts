import { DmiQueryType } from "../types/dmi/dmiTypes"
import { PrismaClientType } from "../types/prismaTypes"

export const createDmiService = (db: PrismaClientType) => ({
    fetchDMIReadingsByQuery: async (queryData: DmiQueryType) => {
        return db.dMI.findMany({
            ...(queryData.limit && { take: queryData.limit }),
            where: {
                observed_at: {
                    ...(queryData.from && { gte: queryData.from }),
                    ...(queryData.to && { lte: queryData.to })
                }
            }
        })
    }
})
