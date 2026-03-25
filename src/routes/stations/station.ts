// src/routes/stations/station.ts
import { Router } from 'express';
import { validateStation } from '../../middleware';
import readingsRoutes from './readings';
import { getStation } from '../../controllers/stations/stationController';

// Import all routes here
const router = Router({ mergeParams: true });

router.get('/:station', validateStation, getStation);
router.use('/:station/readings', readingsRoutes);

export default router;