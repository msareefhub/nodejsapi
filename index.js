import express from 'express';
import dotenv from 'dotenv';

import usersRouter from './routes/users.js';
import authRouter from './routes/auth.js';

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
      title: 'Node.js API with Swagger + JWT',
      version: '1.0.0',
      description: 'API Documentation using swagger-jsdoc',
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

app.use('/auth', authRouter);
app.use('/', usersRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  console.log(`Swagger Docs: http://localhost:3000/api`);
});
