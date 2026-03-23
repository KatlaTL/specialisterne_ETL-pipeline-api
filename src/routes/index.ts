// src/routes/index.ts
import { Router } from 'express';
import readingsRoutes from './readings';

// Import all routes here
const router = Router();

router.use('/readings', readingsRoutes);

export default router;