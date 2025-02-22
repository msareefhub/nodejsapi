import express from 'express';
import usersRouter from './routes/users.js';
import authRouter from './routes/auth.js';

const app = express();

//middleware
app.use(express.json());

app.use('/auth', authRouter);
app.use('/users', usersRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
