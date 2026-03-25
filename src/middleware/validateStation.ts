import { NextFunction, Request, Response } from "express";
import { ApiStationSchema } from "../schemas/apiStationSchema";

export const validateStation = (req: Request, res: Response, next: NextFunction) => {
    const { station } = req.params;

    const result = ApiStationSchema.safeParse(station);

    if (!result.success) {
        return res.status(404).json({
            error: "Sensor Not Found",
            message: "The sensor ID provided is invalid or does not exist.",
            status: 404,
            hint: "Please check that the sensor ID is correct and exists in the system. api/readings/:['bme280' | 'dmi' | 'ds18b20' | 'scd41']"
        })
    }

    req.validatedSensor = result.data;
    next();
}