import express from 'express';
import { getDungeons, createDungeon } from '../controllers/dungeonController.mjs';

const router = express.Router();

router.get('/', getDungeons);
router.post('/', createDungeon);

export default router;
