import expreess from 'express';
import { authenticateToken } from '../controllers/auth.js';
import { getAllEmployee, addEmployee } from '../controllers/employee.js';

const router = expreess.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Employees:
 *          properties:
 *              user_name:
 *                  type: string
 */

/**
 * @swagger
 * /employees:
 *  get:
 *      summary: Find all employees
 *      tags: [Employee]
 *      description: Find all employees in the database
 *      responses:
 *          200:
 *              description: Employees has been found
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: 'components/schemas/Employees'
 */
router.get('/employees', authenticateToken, getAllEmployee);

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
 *      tags: [Employee]
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
router.post('/addemployee', authenticateToken, addEmployee);

export default router;
