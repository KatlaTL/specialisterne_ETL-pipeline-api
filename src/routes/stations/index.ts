// src/routes/stations/index.ts
import { Router } from 'express';
import { getStations } from '../../controllers/stations/stationsController';

// Import all routes here
const router = Router();

router.get('/', getStations);

export default router;