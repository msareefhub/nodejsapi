import expreess from 'express';
import { authenticateToken } from '../controllers/auth.js';
import {
  getEmployeeById,
  getAllEmployee,
  addEmployee,
} from '../controllers/employee.js';

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
router.get('/', authenticateToken, getAllEmployee);

/**
 * @swagger
 * /employees/{id}:
 *  get:
 *      summary: Find a employee by ID
 *      tags: [Employee]
 *      description: Find a employee in the database by ID
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The employee ID
 *      responses:
 *          200:
 *              description: Employee has been found
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: 'components/schemas/Employees'
 */
router.get('/:id', authenticateToken, getEmployeeById);

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
