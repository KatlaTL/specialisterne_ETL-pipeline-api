// src/routes/stations/station.ts
import { Router } from 'express';
import { getLatestStationReadings, getStationReadingsByQuery } from '../../controllers/stations/readingsController';
import { validateQueryParams, validateStation } from '../../middleware';

// Import all routes here
const router = Router({ mergeParams: true });

router.get('/', validateStation, validateQueryParams, getStationReadingsByQuery);
router.get('/latest', validateStation, getLatestStationReadings);

export default router;