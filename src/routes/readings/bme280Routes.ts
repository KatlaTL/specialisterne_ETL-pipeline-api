import { Router } from 'express';
import { getAllDme280Readings } from '../../controllers/readings/bme280Controller';

const router = Router();

router.get('/bme280', getAllDme280Readings);

export default router;