"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLatestStationReadings = exports.getStationReadingsByQuery = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const createStationReadingsService_1 = require("../../services/stations/factory/createStationReadingsService");
const getStationReadingsByQuery = async (req, res, next) => {
    try {
        const { validatedQuery, validatedSensor } = req;
        const service = (0, createStationReadingsService_1.createStationReadingsService)(prisma_1.default, validatedSensor);
        const readings = await service.fetchReadingsByQuery(validatedQuery);
        return res.json(readings);
    }
    catch (err) {
        next(err);
    }
};
exports.getStationReadingsByQuery = getStationReadingsByQuery;
const getLatestStationReadings = async (req, res, next) => {
    try {
        const { validatedSensor } = req;
        const service = (0, createStationReadingsService_1.createStationReadingsService)(prisma_1.default, validatedSensor);
        const readings = await service.fetchlatestReadings();
        return res.json(readings);
    }
    catch (err) {
        next(err);
    }
};
exports.getLatestStationReadings = getLatestStationReadings;
