import expreess from 'express';
import { register, login, logout } from '../controllers/auth.js';

const router = expreess.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

export default router;
