import express from 'express';
import { createPlayer } from '../controllers/playerController.mjs';
import { authenticateToken } from '../middleware/authMiddleware.mjs';

const router = express.Router();

router.post('/', authenticateToken, createPlayer);

export default router;
