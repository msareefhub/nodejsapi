import expreess from 'express';
import { getUser } from '../controllers/user.js';

const router = expreess.Router();

router.get('/find:userId', getUser);

export default router;
