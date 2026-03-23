import { Router } from 'express';
import { getAllDs18b20Readings } from '../../controllers/readings/ds18b20Controller';

const router = Router();

router.get('/ds18b20', getAllDs18b20Readings);

export default router;