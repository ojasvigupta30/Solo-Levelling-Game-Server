import express from 'express';
import { createOrUpdatePlayer, getPlayer, addXP, getPlayerProfile } from '../controllers/playerController.mjs';
import { authenticateToken } from '../middleware/authMiddleware.mjs';

const router = express.Router();

router.post('/', authenticateToken, createOrUpdatePlayer);
router.get('/:username', authenticateToken, getPlayer);
router.patch('/:username/xp', authenticateToken, addXP);
router.get('/profile', authenticateToken, getPlayerProfile);

export default router;

