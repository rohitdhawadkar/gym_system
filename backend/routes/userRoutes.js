import express from 'express';
import { signup, login, getUsers, getUserById, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
