import { db } from '../connect.js';

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
