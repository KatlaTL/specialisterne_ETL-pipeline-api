// src/routes/stations/station.ts
import { Router } from 'express';
import { validateStation } from '../../middleware';
import readingsRoutes from './readings/readings';
import { getStation } from '../../controllers/stations/stationController';

// Import all routes here
const router = Router({ mergeParams: true });


router.get('/:station', validateStation, getStation);


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
router.use('/:station/readings', readingsRoutes);

export default router;