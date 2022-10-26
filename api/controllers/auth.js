import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
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
  //checking if user exists
  const q = "SELECT*FROM users where username= ?";
  db.query(q, [req.body.username], (error, data) => {
    if (error) return res.json(error);
    if (data.length === 0) return res.status(404).json("user doesn't exists");
    //checking password
    const checkPass = bcrypt.compareSync(req.body.password, data[0].password);
    const { password, ...infos } = data[0];
    if (!checkPass) return res.status(400).json("Invalid Credentials");
    const token = jwt.sign({ id: data[0].id }, "tokenKey");
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(infos);
  });
};
export const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("Logged Out!");
};
