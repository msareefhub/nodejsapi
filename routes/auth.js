import express from 'express';
import { register, login, logout } from '../controllers/auth.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          required:
 *              - username
 *              - email
 *              - password
 *              - name
 *          properties:
 *              username:
 *                  type: string
 *                  description: The username
 *              email:
 *                  type: string
 *                  description: The email
 *              password:
 *                  type: string
 *                  description: The password
 *              name:
 *                  type: string
 *                  description: The name
 */

/**
 * @swagger
 * /auth/register:
 *  post:
 *      summary: Register a new user
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
router.post('/register', register);

router.post('/login', login);

router.post('/logout', logout);

export default router;
