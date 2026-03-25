import { NextFunction, Request, Response } from "express";
import { ApiQueryType, ApiSensorType, ValidatedRequest } from "../../types/apiTypes";
import prisma from "../../lib/prisma";
import { createStationReadingService } from "../../services/stations/factory/createStationReadingService";

export const getStationByQuery = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { validatedQuery, validatedSensor } = req as ValidatedRequest<ApiQueryType, ApiSensorType>;

        const service = createStationReadingService(prisma, validatedSensor);

        const readings = await service.fetchReadingsByQuery(validatedQuery);

        return res.json(readings);
    } catch (err) {
        next(err);
    }
}