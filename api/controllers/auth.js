import { db } from "../db.js";
import bcrypt from "bcryptjs";
export const register = (req, res) => {
  //checking if user exists

  const q = "SELECT * FROM users WHERE email= ? OR username= ?";
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User Already Exists");
    //hashing password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const q = "INSERT INTO users (`username`,`email`,`password`) values(?)";
    const values = [req.body.username, req.body.email, hash];
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("user registered successfully");
    });
  });
};
export const login = (req, res) => {
  return res.json("logged in");
};
export const logout = (req, res) => {
  return res.json("logged out");
};
