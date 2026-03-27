"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/stations/station.ts
const express_1 = require("express");
const middleware_1 = require("../../middleware");
const readings_1 = __importDefault(require("./readings/readings"));
const stationController_1 = require("../../controllers/stations/stationController");
// Import all routes here
const router = (0, express_1.Router)({ mergeParams: true });
router.get('/:station', middleware_1.validateStation, stationController_1.getStation);
/**
 * @openapi
 * /api/stations/{station}/readings:
 *   get:
 *     summary: Get all readings for a station
 *     tags:
 *       - Stations
 *     parameters:
 *       - in: path
 *         name: station
 *         required: true
 *         description: Station name
 *         schema:
 *           type: string
 *       - in: query
 *         name: limit
 *         required: false
 *         description: Number of station to return
 *         schema:
 *           type: integer
 *           example: 10
 *       - in: query
 *         name: order
 *         required: false
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *           example: asc
 *       - in: query
 *         name: from
 *         required: false
 *         schema:
 *           type: string
 *           format: date-time
 *           example: 2026-03-23T10:16:27.000
 *       - in: query
 *         name: to
 *         required: false
 *         schema:
 *           type: string
 *           format: date-time
 *           example: 2026-03-24T10:16:27.000
 *     responses:
 *       200:
 *         description: Success
 */
router.use('/:station/readings', readings_1.default);
exports.default = router;
