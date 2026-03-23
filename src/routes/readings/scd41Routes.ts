import { Router } from 'express';
import { getAllScd41Readings } from '../../controllers/readings/scd41Controller';

const router = Router();

router.get('/scd41', getAllScd41Readings);

export default router;