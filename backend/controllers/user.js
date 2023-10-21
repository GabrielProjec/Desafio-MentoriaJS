import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM users";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q = "INSERT INTO users(username, password) VALUES(?, ?);";

  db.query(q, [req.body.username, req.body.password], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuario criado com sucesso");
  });
};
