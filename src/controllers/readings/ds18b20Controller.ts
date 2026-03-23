import { NextFunction, Request, Response } from "express";
import { ds18b20Service } from "../../services";

export const getAllDs18b20Readings = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const readings = await ds18b20Service.fetchAllDs18b20Readings();
        res.json(readings);
    } catch (err) {
        next(err);
    }
}