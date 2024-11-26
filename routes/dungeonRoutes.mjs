import express from 'express';
import { createDungeon, getDungeons, getDungeonById, exploreDungeon } from '../controllers/dungeonController.mjs';
import { authenticateToken } from '../middleware/authMiddleware.mjs';

const router = express.Router();

// Protected routes
router.post('/', authenticateToken, createDungeon);
router.get('/', authenticateToken, getDungeons);
router.get('/:id', authenticateToken, getDungeonById);
router.post('/explore', authenticateToken, exploreDungeon); // New route for exploring a dungeon

export default router;
