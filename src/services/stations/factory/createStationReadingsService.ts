import { DefaultArgs } from "@prisma/client/runtime/client";
import { ApiQueryType } from "../../../types/apiTypes";
import { LowercasePrismaModelKeys, PrismaClientType, PrismaModelKeys } from "../../../types/prismaTypes";
import { DMIDelegate, GlobalOmitConfig } from "../../../generated/internal/prismaNamespace";
import { reduceRequestedFields } from "../../../utils/services/servicesUtils";

type DbModelKeyType = DMIDelegate<DefaultArgs, {
    omit: GlobalOmitConfig | undefined;
}>

const stationMap: Record<LowercasePrismaModelKeys, PrismaModelKeys> = {
    dmi: "dMI",
    bme280: "bME280",
    ds18b20: "dS18B20",
    scd41: "sCD41"
}

export const createStationReadingsService = <K extends LowercasePrismaModelKeys>(db: PrismaClientType, modelKey: K) => {
    const model = db[stationMap[modelKey]] as DbModelKeyType;

    return {
        fetchReadingsByQuery: async (queryData: ApiQueryType, requestedFields?: string[]) => {
            try {
                return model.findMany({
                    ...(requestedFields && {
                        select: reduceRequestedFields(requestedFields)
                    }),
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
            } catch (error: any) {
                console.error("Error fetching readings:", error.message);

                throw new Error(`Failed to fetch readings. Requested fields may not exist in the model.`);
            }
        },
        fetchlatestReadings: async (requestedFields?: string[]) => {
            try {
                return model.findFirst({
                    ...(requestedFields && {
                        select: reduceRequestedFields(requestedFields)
                    })
                })
            } catch (error: any) {
                console.error("Error fetching readings:", error.message);

                throw new Error(`Failed to fetch readings: ${error.message}`)
            }
        }
    }
}