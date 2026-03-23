import prisma from "../lib/prisma"
import { createDmiService } from "./dmiService";
import { createBme280Service } from "./bme280Service";
import { createDs18b20Service } from "./ds18b20Service";
import { createScd41Service } from "./scd41Service";

export const dmiService = createDmiService(prisma);
export const bME280Service = createBme280Service(prisma);
export const ds18b20Service = createDs18b20Service(prisma);
export const scd41Service = createScd41Service(prisma);
