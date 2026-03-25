import { NextFunction, Request, Response } from "express";
import { ApiQueryType, ApiSensorType, ValidatedRequest } from "../../types/apiTypes";
import prisma from "../../lib/prisma";
import { createStationReadingsService } from "../../services/stations/factory/createStationReadingsService";

export const getStationReadingsByQuery = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { validatedQuery, validatedSensor } = req as ValidatedRequest<ApiQueryType, ApiSensorType>;

        const service = createStationReadingsService(prisma, validatedSensor);

        const readings = await service.fetchReadingsByQuery(validatedQuery);

        return res.json(readings);
    } catch (err) {
        next(err);
    }
}

export const getLatestStationReadings = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { validatedSensor } = req as ValidatedRequest<ApiQueryType, ApiSensorType>;

        const service = createStationReadingsService(prisma, validatedSensor);

        const readings = await service.fetchlatestReadings();

        return res.json(readings);
    } catch (err) {
        next(err);
    }
}