import { NextFunction, Request, Response } from "express";
import { ApiQuerySchema } from "../schemas/apiQuerySchema";

export const validateQuery = (req: Request, res: Response, next: NextFunction) => {
    const result = ApiQuerySchema.safeParse(req.query);

    if (!result.success) {
        res.status(400).json({ error: result.error.issues })
    }

    req.validatedQuery = result.data;
    next();
}