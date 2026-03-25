import { NextFunction, Request, Response } from "express";
import { stationService } from "../../services/stations";

export const getStations = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const stations = await stationService.fetchAllStations();

        return res.json(stations);
    } catch (err) {
        next(err);
    }
}