"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStationReadingsService = void 0;
const servicesUtils_1 = require("../../../utils/services/servicesUtils");
const stationMap = {
    dmi: "dMI",
    bme280: "bME280",
    ds18b20: "dS18B20",
    scd41: "sCD41"
};
const createStationReadingsService = (db, modelKey) => {
    const model = db[stationMap[modelKey]];
    return {
        fetchReadingsByQuery: async (queryData, requestedFields) => {
            try {
                return model.findMany({
                    ...(requestedFields && {
                        select: (0, servicesUtils_1.reduceRequestedFields)(requestedFields)
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
                });
            }
            catch (error) {
                console.error("Error fetching readings:", error.message);
                throw new Error(`Failed to fetch readings. Requested fields may not exist in the model.`);
            }
        },
        fetchlatestReadings: async (requestedFields) => {
            try {
                return model.findFirst({
                    ...(requestedFields && {
                        select: (0, servicesUtils_1.reduceRequestedFields)(requestedFields)
                    })
                });
            }
            catch (error) {
                console.error("Error fetching readings:", error.message);
                throw new Error(`Failed to fetch readings: ${error.message}`);
            }
        }
    };
};
exports.createStationReadingsService = createStationReadingsService;
