"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stationService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const stationService_1 = require("./stationService");
exports.stationService = (0, stationService_1.createStationService)(prisma_1.default);
