import { NextFunction, Request, Response } from "express";
import { ApiQuerySchema } from "../schemas/apiQuerySchema";

export const validateQueryParams = (req: Request, res: Response, next: NextFunction) => {
    const result = ApiQuerySchema.safeParse(req.query);

    if (!result.success) {
        return res.status(400).json({ error: result.error.issues })
    }

    req.validatedQuery = result.data;
    next();
}