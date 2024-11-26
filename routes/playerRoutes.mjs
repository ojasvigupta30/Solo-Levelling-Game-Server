import express from 'express';
import { createOrUpdatePlayer, getPlayer, addXP, addToInventory } from '../controllers/playerController.mjs';
import { authenticateToken } from '../middleware/authMiddleware.mjs';

const router = express.Router();

router.post('/', authenticateToken, createOrUpdatePlayer);
router.get('/:username', authenticateToken, getPlayer);
router.patch('/:username/xp', authenticateToken, addXP);
router.post('/inventory', authenticateToken, addToInventory);

export default router;

