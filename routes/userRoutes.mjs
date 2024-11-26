import express from 'express';
import {
    registerUser,
    loginUser,
    getUsers,
    deleteUser,
} from '../controllers/userController.mjs';

const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected routes (example: add authentication middleware later)
router.get('/', getUsers);
router.delete('/:id', deleteUser);

export default router;
