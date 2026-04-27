import express from 'express';
import dotenv from 'dotenv';

import authRouter from './routes/auth.js';
import usersRouter from './routes/users.js';
import employeeRouter from './routes/employee.js';

dotenv.config();

const app = express();

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

//middleware
app.use(express.json());

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'HR Payroll API',
      version: '1.0.0',
      description: 'API Documentation for HR Payroll App',
    },

    servers: [
      {
        url: process.env.BASE_URL,
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },

    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: ['./routes/*.js'],
};

const specs = swaggerJSDoc(options);

app.use(
  '/api',
  swaggerUi.serve,
  swaggerUi.setup(specs, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  }),
);

app.use('/', authRouter);
app.use('/users', usersRouter);
app.use('/employees', employeeRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  console.log(`Swagger Docs: ${process.env.API_URL}`);
});
