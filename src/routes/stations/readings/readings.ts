// src/routes/stations/station.ts
import { Router } from 'express';
import { getLatestStationReadings, getStationReadingsByQuery } from '../../../controllers/stations/readingsController';
import { validateQueryParams, validateStation } from '../../../middleware';

// Import all routes here
const router = Router({ mergeParams: true });

router.get('/', validateStation, validateQueryParams, getStationReadingsByQuery);

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
router.get('/latest', validateStation, getLatestStationReadings);

export default router;