import express from "express";
import {
  addPost,
  deletePost,
  editPost,
  getPost,
  getPosts,
} from "../controllers/post.js";
const router = express.Router();
router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/add", addPost);
router.put("/:id", editPost);
router.delete("/:id", deletePost);
export default router;
