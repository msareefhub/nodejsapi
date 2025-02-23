import express from 'express';
import usersRouter from './routes/users.js';
import authRouter from './routes/auth.js';

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'NodeJS API Projct For MySQL',
      version: '1.0.0',
      description: 'A simple user API',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJSDoc(options);
app.use('/', swaggerUi.serve, swaggerUi.setup(specs));

//middleware
app.use(express.json());

app.use('/auth', authRouter);
app.use('/users', usersRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
