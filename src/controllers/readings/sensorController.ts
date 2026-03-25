import { NextFunction, Request, Response } from "express";
import { ApiQueryType, ApiSensorType, ValidatedRequest } from "../../types/apiTypes";
import { createService } from "../../services/factory/createService";
import prisma from "../../lib/prisma";

export const sensorController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { validatedQuery, validatedSensor } = req as ValidatedRequest<ApiQueryType, ApiSensorType>;

        const service = createService(prisma, validatedSensor);

        const readings = await service.fetchReadingsByQuery(validatedQuery);

        return res.json(readings);
    } catch (err) {
        next(err);
    }
}