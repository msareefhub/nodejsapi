import express from 'express';
import { register, addEmployee, login, logout } from '../controllers/auth.js';

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

/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          required:
 *              - employee_code
 *          properties:
 *              employee_code:
 *                  type: number
 *                  description: The employee id
 */

/**
 * @swagger
 * /auth/addemployee:
 *  post:
 *      summary: Add New Employee
 *      description: Add New Employee
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: Emoployee has been created
 */
router.post('/addemployee', addEmployee);

/**
 * @swagger
 * /auth/login:
 *  post:
 *      summary: Login a user
 *      description: Login a user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: User has been logged in
 */
router.post('/login', login);

/**
 * @swagger
 * /auth/logout:
 *  post:
 *      summary: Logout a user
 *      description: Logout a user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: User has been logged out
 */
router.post('/logout', logout);

export default router;
