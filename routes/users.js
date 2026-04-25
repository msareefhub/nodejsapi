import expreess from 'express';
import { authenticateToken } from '../controllers/auth.js';
import { getUser, getUserById, login } from '../controllers/user.js';

const router = expreess.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Users:
 *          properties:
 *              user_name:
 *                  type: string
 */

/**
 * @swagger
 * /users:
 *  get:
 *      summary: Find all users
 *      description: Find all users in the database
 *      responses:
 *          200:
 *              description: User has been found
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: 'components/schemas/Users'
 */
router.get('/users', authenticateToken, getUser);

/**
 * @swagger
 * /users/{id}:
 *  get:
 *      summary: Find a user by ID
 *      description: Find a user in the database by ID
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The user ID
 *      responses:
 *          200:
 *              description: User has been found
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: 'components/schemas/Users'
 */
router.get('/users/:id', authenticateToken, getUserById);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Generate JWT Token
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token generated successfully
 */

router.post('/login', login);

export default router;
