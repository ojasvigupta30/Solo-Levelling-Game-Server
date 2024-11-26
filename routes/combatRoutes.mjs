import express from 'express';
import { battleMonster } from '../controllers/combatController.mjs';
import { authenticateToken } from '../middleware/authMiddleware.mjs';

const router = express.Router();

router.post('/battle', authenticateToken, battleMonster);

export default router;
