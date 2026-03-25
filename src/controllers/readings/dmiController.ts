import { NextFunction, Request, Response } from "express";
import { dmiService } from "../../services";
import { ApiQueryType, ValidatedRequest } from "../../types/apiTypes";

export const fetchDMIReadingsByQuery = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const query = (req as ValidatedRequest<ApiQueryType>).validatedQuery;

        const readings = await dmiService.fetchReadingsByQuery(query);

        res.json(readings);
    } catch (err) {
        next(err);
    }
}