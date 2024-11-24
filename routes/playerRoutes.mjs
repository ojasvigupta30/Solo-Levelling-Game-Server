import express from 'express';
import { createPlayer, getPlayer } from '../controllers/playerController.mjs';

const router = express.Router();

router.post('/', createPlayer);
router.get('/:id', getPlayer);

export default router;
