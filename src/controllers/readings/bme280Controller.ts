import { NextFunction, Request, Response } from "express";
import { bME280Service } from "../../services";
import { ApiQueryType, ValidatedRequest } from "../../types/apiTypes";

export const getAllDme280Readings = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const query = (req as ValidatedRequest<ApiQueryType>).validatedQuery;

        const readings = await bME280Service.fetchReadingsByQuery(query);

        res.json(readings);
    } catch (err) {
        next(err);
    }
}