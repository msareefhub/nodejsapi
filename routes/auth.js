import express from 'express';
import { authenticateToken } from '../controllers/auth.js';
import { register, token } from '../controllers/auth.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          required:
 *              - employee_id
 *              - user_name
 *              - role_id
 *              - password
 *          properties:
 *              employee_id:
 *                  type: number
 *                  description: The employee id
 *              user_name:
 *                  type: string
 *                  description: The user name
 *              role_id:
 *                  type: number
 *                  description: The role id
 *              password:
 *                  type: string
 *                  description: The password
 */

/**
 * @swagger
 * /auth/register:
 *  post:
 *      summary: Register a new user
 *      tags: [User]
 *      description: Register a new user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: User has been created
 */
router.post('/register', authenticateToken, register);

router.post('/token', token);

export default router;
