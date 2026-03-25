// src/routes/index.ts
import { Router } from 'express';
import stationsRoutes from './stations/index';
import stationRoutes from './stations/station';

const router = Router();

// Base path: /stations
router.use('/stations', stationsRoutes);
router.use('/stations', stationRoutes);

export default router;