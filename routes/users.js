import expreess from 'express';
import { getUser, getUserById } from '../controllers/user.js';

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
router.get('/users', getUser);

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
router.get('/users/:id', getUserById);

export default router;
