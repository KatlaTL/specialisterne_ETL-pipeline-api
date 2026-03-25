// src/routes/stations/station.ts
import { Router } from 'express';
import { getStationByQuery } from '../../controllers/stations/stationController';
import { validateQueryParams, validateStation } from '../../middleware';

// Import all routes here
const router = Router({ mergeParams: true });

router.get('/:station', validateStation, validateQueryParams, getStationByQuery);

export default router;