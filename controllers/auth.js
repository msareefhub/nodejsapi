import { db } from '../connect.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  // Format: Bearer TOKEN
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      status: false,
      message: 'Access token required',
    });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({
        status: false,
        message: 'Invalid or expired token',
      });
    }

    req.user = user;
    next();
  });
};

export const register = (req, res) => {
  const getQuery = 'SELECT * FROM users WHERE user_name = ?';

  db.query(getQuery, [req.body.user_name], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length) return res.status(409).json('User already exists');

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(req.body.password, salt);

    const addQuery =
      'INSERT INTO users (`employee_id`, `user_name`, `role_id`, `password`) VALUES (?)';

    const values = [
      req.body.employee_id,
      req.body.user_name,
      req.body.role_id,
      hashPassword,
    ];

    db.query(addQuery, [values], (err, result) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json('User has ben created');
    });
  });
};

export const login = (req, res) => {
  const { username, password } = req.body;

  // Dummy validation
  if (username === 'hradmin' && password === 'Pay@7176#ilma') {
    const token = jwt.sign(
      {
        username,
      },
      process.env.SECRET_KEY,
      { expiresIn: '1h' },
    );

    return res.status(200).json({
      status: true,
      message: 'Login successful',
      token,
    });
  }

  return res.status(401).json({
    status: false,
    message: 'Invalid credentials',
  });
};
