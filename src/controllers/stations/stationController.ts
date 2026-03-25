import { NextFunction, Request, Response } from "express";
import { stationService } from "../../services/stations";
import { ApiQueryType, ApiSensorType, ValidatedRequest } from "../../types/apiTypes";

export const getStation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { validatedSensor } = req as ValidatedRequest<ApiQueryType, ApiSensorType>;

        const station = await stationService.fetchStation(validatedSensor);

        return res.json(station);
    } catch (err) {
        next(err);
    }
}