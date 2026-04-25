import { db } from '../connect.js';
import jwt from 'jsonwebtoken';

const SECRET_KEY = '123456789abcdef';

export const getUserById = (req, res) => {
  const getQuery = 'SELECT * FROM users WHERE id = ?';

  db.query(getQuery, [req.params.id], (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json({ success: true, data: result });
  });
};

export const getUser = (req, res) => {
  const getQuery = 'SELECT * FROM users';

  db.query(getQuery, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json({ success: true, data: result });
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
      SECRET_KEY,
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
