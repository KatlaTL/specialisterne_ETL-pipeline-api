// src/routes/index.ts
import { Router } from 'express';
import readingsRoutes from './readings';
import { validateQuery } from '../middleware/validateQueryParameters';

// Import all routes here
const router = Router();

router.use('/readings', validateQuery, readingsRoutes);

export default router;