import { NextFunction, Request, Response } from "express";
import { scd41Service } from "../../services";
import { ApiQueryType, ValidatedRequest } from "../../types/apiTypes";

export const getAllScd41Readings = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const query = (req as ValidatedRequest<ApiQueryType>).validatedQuery;

        const readings = await scd41Service.fetchReadingsByQuery(query);

        res.json(readings);
    } catch (err) {
        next(err);
    }
}