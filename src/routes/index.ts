// src/routes/index.ts
import { Router } from 'express';
import stationsRoutes from './stations/index';
import stationRoutes from './stations/station';

const router = Router();

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
router.use('/stations', stationsRoutes);

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
 *         description: Station name to lowercase
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.use('/stations', stationRoutes);

export default router;