import { db } from '../connect.js';
import jwt from 'jsonwebtoken';

export const getAllEmployee = (req, res) => {
  const getQuery = 'CALL getEmployee()';

  db.query(getQuery, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json({ success: true, data: result });
  });
};

export const addEmployee = (req, res) => {
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
