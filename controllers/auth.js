import { db } from '../connect.js';
import bcrypt from 'bcryptjs';

export const register = (req, res) => {
  const getQuery = 'SELECT * FROM users WHERE username = ?';

  db.query(getQuery, [req.body.username], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length) return res.status(409).json('User already exists');

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(req.body.password, salt);

    const addQuery =
      'INSERT INTO users (`username`, `email`, `password`, `name`) VALUES (?)';

    const values = [
      req.body.username,
      req.body.email,
      hashPassword,
      req.body.name,
    ];

    db.query(addQuery, [values], (err, result) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json('User has ben created');
    });
  });
};

export const login = (req, res) => {
  //TODO: Add logic to get user
};

export const logout = (req, res) => {
  //TODO: Add logic to get user
};
