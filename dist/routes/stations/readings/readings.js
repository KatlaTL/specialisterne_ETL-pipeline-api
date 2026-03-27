"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/stations/station.ts
const express_1 = require("express");
const readingsController_1 = require("../../../controllers/stations/readingsController");
const middleware_1 = require("../../../middleware");
// Import all routes here
const router = (0, express_1.Router)({ mergeParams: true });
router.get('/', middleware_1.validateStation, middleware_1.validateQueryParams, readingsController_1.getStationReadingsByQuery);
/**
 * @openapi
 * /api/stations/{station}/readings/latest:
 *   get:
 *     summary: Get the latest reading for a station
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
router.get('/latest', middleware_1.validateStation, readingsController_1.getLatestStationReadings);
exports.default = router;
