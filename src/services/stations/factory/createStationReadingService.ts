import { DefaultArgs } from "@prisma/client/runtime/client";
import { ApiQueryType } from "../../../types/apiTypes";
import { LowercasePrismaModelKeys, PrismaClientType, PrismaModelKeys } from "../../../types/prismaTypes";
import { DMIDelegate, GlobalOmitConfig } from "../../../generated/internal/prismaNamespace";

type DbModelKeyType = DMIDelegate<DefaultArgs, {
    omit: GlobalOmitConfig | undefined;
}>

const stationMap: Record<LowercasePrismaModelKeys, PrismaModelKeys> = {
    dmi: "dMI",
    bme280: "bME280",
    ds18b20: "dS18B20",
    scd41: "sCD41"
}

export const createStationReadingService = <K extends LowercasePrismaModelKeys>(db: PrismaClientType, modelKey: K) => {
    return {
        fetchReadingsByQuery: async (queryData: ApiQueryType) => {
            const model = db[stationMap[modelKey]] as DbModelKeyType;
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