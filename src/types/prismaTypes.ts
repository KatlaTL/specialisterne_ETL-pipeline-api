import { DefaultArgs } from "@prisma/client/runtime/client";
import { PrismaClient } from "../generated/client";
import { GlobalOmitConfig } from "../generated/internal/prismaNamespace";

export type PrismaClientType = PrismaClient<never, GlobalOmitConfig | undefined, DefaultArgs>;

export type PrismaModelKeys = {
    [K in keyof PrismaClientType]: PrismaClientType[K] extends { findMany: Function } ? K : never
}[keyof PrismaClientType];

export type LowercasePrismaModelKeys = Lowercase<PrismaModelKeys>;

export const PrismaModelKeysArray: LowercasePrismaModelKeys[] = ["bme280", "dmi", "ds18b20", "scd41"] as const