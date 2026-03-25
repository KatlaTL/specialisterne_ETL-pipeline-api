import { NextFunction, Request, Response } from "express";
import { ds18b20Service } from "../../services";
import { ApiQueryType, ValidatedRequest } from "../../types/apiTypes";

export const getAllDs18b20Readings = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const query = (req as ValidatedRequest<ApiQueryType>).validatedQuery;

        const readings = await ds18b20Service.fetchReadingsByQuery(query);
        
        res.json(readings);
    } catch (err) {
        next(err);
    }
}