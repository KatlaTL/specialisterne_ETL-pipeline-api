import { LowercasePrismaModelKeys, PrismaGraphQL } from "../../types/prismaTypes";

export const stationConfig: Record<PrismaGraphQL, LowercasePrismaModelKeys> = {
    BME280Readings: "bme280",
    DMIReadings: "dmi",
    DS18B20Readings: "ds18b20",
    SCD41Readings: "scd41"
}