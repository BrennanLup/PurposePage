import express from 'express';
import { userController } from '../controllers/userController';

const router = express.Router();

// Routes just direct traffic to the appropriate controller method
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

export default router; 