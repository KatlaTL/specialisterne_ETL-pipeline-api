import { Router } from 'express';
import { fetchDMIReadingsByQuery } from '../../controllers/readings/dmiController';

const router = Router();

router.get('/dmi', fetchDMIReadingsByQuery);

export default router;