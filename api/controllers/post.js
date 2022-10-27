import { db } from "../db.js";
import jwt from "jsonwebtoken";
export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT*FROM posts WHERE category= ?"
    : "SELECT*FROM posts";
  db.query(q, [req.query.cat], (error, data) => {
    if (error) return res.status(500).json(error);
    return res.status(200).json(data);
  });
};
export const getPost = (req, res) => {
  //const q = "SELECT*FROM posts WHERE id= ?";
  const q =
    "SELECT p.id, `username`, `title`, `description`, u.img as userImg, p.img, `category`, `date` FROM users u JOIN posts p ON  u.id=p.userid where p.id= ?";
  const postId = req.params.id;
  db.query(q, [postId], (error, data) => {
    if (error) return res.status(500).json(error);
    return res.status(200).json(data[0]);
  });
};
export const addPost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not Authenticated");
  jwt.verify(token, "tokenKey", (error, user) => {
    if (error) return res.status(403).json("Invalid Token!");
    const q =
      "INSERT INTO posts(`title`,`description`,`img`,`date`,`userid`,`category`) VALUES(?)";
    const values = [
      req.body.title,
      req.body.description,
      req.body.imgUrl,
      req.body.date,
      user.id,
      req.body.cat,
    ];
    db.query(q, [values], (error, data) => {
      if (error) return res.status(500).json(error);
      return res.json("Post has been created");
    });
  });
};
export const editPost = (req, res) => {
  const token = req.cookies.access_token;
  const postId = req.params.id;
  if (!token) return res.status(401).json("Not Authenticated");
  jwt.verify(token, "tokenKey", (error, user) => {
    if (error) return res.status(403).json("Invalid Token!");
    const q =
      "UPDATE posts SET `title`= ?, `description`= ?, `img`= ? , `category`= ? WHERE id= ? AND userid= ?";
    const values = [
      req.body.title,
      req.body.description,
      req.body.imgUrl,
      req.body.cat,
    ];
    db.query(q, [...values, postId, user.id], (error, data) => {
      if (error) return res.status(500).json(error);
      return res.json("Post has been updated");
    });
  });
};

export const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not Authenticated");
  jwt.verify(token, "tokenKey", (error, user) => {
    if (error) return res.status(403).json("Invalid Token!");
    const q = "DELETE FROM posts WHERE `id` = ? AND userid= ?";
    db.query(q, [req.params.id, user.id], (error, data) => {
      if (error)
        return res
          .status(403)
          .json("You can't delete a post that doesn't belong to you!");
      return res.json("Post has Been deleted");
    });
  });
};
