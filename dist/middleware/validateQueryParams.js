"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQueryParams = void 0;
const apiStationSchema_1 = require("../schemas/apiStationSchema");
const validateQueryParams = (req, res, next) => {
    const result = apiStationSchema_1.ApiQuerySchema.safeParse(req.query);
    if (!result.success) {
        return res.status(400).json({ error: result.error.issues });
    }
    req.validatedQuery = result.data;
    next();
};
exports.validateQueryParams = validateQueryParams;
