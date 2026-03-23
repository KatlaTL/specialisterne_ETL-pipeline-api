import { NextFunction, Request, Response } from "express";
import { scd41Service } from "../../services";

export const getAllScd41Readings = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const readings = await scd41Service.fetchAllScd41Readings();
        res.json(readings);
    } catch (err) {
        next(err);
    }
}