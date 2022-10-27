import express from "express";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/users.js";
import postRouter from "./routes/posts.js";
import cookieParser from "cookie-parser";
import multer from "multer";
const app = express();

//to be able to send data to database
app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

app.listen(8800, () => {
  return console.log("Hello from ");
});
