import { NextFunction, Request, Response } from "express";
import { dmiService } from "../../services";

export const fetchDMIReadingsByQuery = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : undefined;
        const from = req.query.from ? new Date(req.query.from as string) : undefined;
        const to = req.query.to ? new Date(req.query.to as string) : undefined;

        // Validate date formats
        if (from && isNaN(from.getTime())) {
            return res.status(400).json({ error: "Invalid 'from' date format" });
        }
        if (to && isNaN(to.getTime())) {
            return res.status(400).json({ error: "Invalid 'to' date format" });
        }

        // Validate limit
        if (limit && (limit <= 0 || isNaN(limit))) {
            return res.status(400).json({ error: "'limit' must be a positive number" });
        }

        const readings = await dmiService.fetchDMIReadingsByQuery({ limit, from, to });
        res.json(readings);
    } catch (err) {
        next(err);
    }
}