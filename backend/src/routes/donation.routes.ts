import { Router } from 'express';
import { getDonationConfig } from '../controllers/donation.controller';

const router = Router();

router.get('/donation', getDonationConfig);

export default router;
