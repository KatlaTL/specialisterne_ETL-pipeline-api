import prisma from "../../lib/prisma"
import { createStationService } from "./stationService";

export const stationService = createStationService(prisma);