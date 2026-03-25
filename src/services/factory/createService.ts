import { DefaultArgs } from "@prisma/client/runtime/client";
import { ApiQueryType } from "../../types/apiTypes";
import { PrismaClientType } from "../../types/prismaTypes";
import { DMIDelegate, GlobalOmitConfig } from "../../generated/internal/prismaNamespace";

type DbModelKeyType = DMIDelegate<DefaultArgs, {
    omit: GlobalOmitConfig | undefined;
}>

export const createService = <K extends keyof PrismaClientType>(db: PrismaClientType, modelKey: K) => {
    return {
        fetchReadingsByQuery: async (queryData: ApiQueryType) => {
            const model = db[modelKey] as DbModelKeyType;

            return model.findMany({
                ...(queryData.limit && { take: queryData.limit }),
                where: {
                    observed_at: {
                        ...(queryData.from && { gte: queryData.from }),
                        ...(queryData.to && { lte: queryData.to })
                    }
                },
                orderBy: {
                    observed_at: queryData.order ?? "asc"
                }
            })
        }
    }
}