"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/index.ts
const express_1 = require("express");
const index_1 = __importDefault(require("./stations/index"));
const station_1 = __importDefault(require("./stations/station"));
const router = (0, express_1.Router)();
/**
 * @openapi
 * /api/stations:
 *   get:
 *     summary: Get all stations
 *     tags:
 *       - Stations
 *     responses:
 *       200:
 *         description: Success
 */
router.use('/stations', index_1.default);
/**
 * @openapi
 * /api/stations/{station}:
 *   get:
 *     summary: Get station by ID
 *     tags:
 *       - Stations
 *     parameters:
 *       - in: path
 *         name: station
 *         required: true
 *         description: Station name
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.use('/stations', station_1.default);
exports.default = router;
