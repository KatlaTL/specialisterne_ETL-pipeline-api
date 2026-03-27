"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLatestStationReadingsResolver = exports.createStationReadingsResolver = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const createStationReadingsService_1 = require("../../services/stations/factory/createStationReadingsService");
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const stationConfig_1 = require("../config/stationConfig");
const apiStationSchema_1 = require("../../schemas/apiStationSchema");
const createStationReadingsResolver = (queryName) => {
    const service = (0, createStationReadingsService_1.createStationReadingsService)(prisma_1.default, stationConfig_1.stationConfig[queryName]);
    return async (_parent, args, _context, info) => {
        const result = apiStationSchema_1.ApiQuerySchema.safeParse(args);
        if (!result.success) {
            throw new Error(result.error.issues.map(e => e.message).toString());
        }
        const requestedFields = Object.keys((0, graphql_fields_1.default)(info));
        return await service.fetchReadingsByQuery(args, requestedFields);
    };
};
exports.createStationReadingsResolver = createStationReadingsResolver;
const createLatestStationReadingsResolver = (queryName) => {
    const service = (0, createStationReadingsService_1.createStationReadingsService)(prisma_1.default, stationConfig_1.stationConfig[queryName]);
    return async (_parent, _args, _context, info) => {
        const requestedFields = Object.keys((0, graphql_fields_1.default)(info));
        return await service.fetchlatestReadings(requestedFields);
    };
};
exports.createLatestStationReadingsResolver = createLatestStationReadingsResolver;
