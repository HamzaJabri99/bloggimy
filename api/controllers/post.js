import { db } from "../db.js";

export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT*FROM posts WHERE category= ?"
    : "SELECT*FROM posts";
  db.query(q, [req.query.cat], (error, data) => {
    if (error) return res(error);
    return res.status(200).json(data);
  });
};
export const getPost = (req, res) => {
  //const q = "SELECT*FROM posts WHERE id= ?";
  const q =
    "SELECT `username`, `title`, `description`, u.img as userImg, p.img, `category`, `date` FROM users u JOIN posts p ON  u.id=p.userid where p.id= ?";
  const postId = req.params.id;
  db.query(q, [postId], (error, data) => {
    if (error) return res(error);
    return res.status(200).json(data[0]);
  });
};
export const addPost = (req, res) => {
  res.json("adding the post");
};
export const editPost = (req, res) => {};

export const deletePost = (req, res) => {};
