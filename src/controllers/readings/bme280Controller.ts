import { NextFunction, Request, Response } from "express";
import { bME280Service } from "../../services";

export const getAllDme280Readings = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const readings = await bME280Service.fetchAllBme280Readings();
        res.json(readings);
    } catch (err) {
        next(err);
    }
}