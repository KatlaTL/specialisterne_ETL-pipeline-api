// src/routes/index.ts
import { Router } from 'express';
import { sensorController } from '../../controllers/readings/sensorController';
import { validateQueryParams, validateSensor } from '../../middleware';

// Import all routes here
const router = Router();

router.use('/readings/:sensor', validateSensor, validateQueryParams, sensorController);

export default router;