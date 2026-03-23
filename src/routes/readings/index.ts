// src/routes/readings/index.ts
import { Router } from 'express';
import dmiRoutes from './dmiRoutes';
import bme280Routes from './bme280Routes';
import ds18b20Routes from './ds18b20Routes';
import scd41Routes from './scd41Routes';

// Import all routes here
const router = Router();

router.use('/', dmiRoutes);
router.use('/', bme280Routes);
router.use('/', ds18b20Routes);
router.use('/', scd41Routes);

export default router;