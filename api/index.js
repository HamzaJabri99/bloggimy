import express from "express";
const app = express();

//to be able to send data to database
app.use(express.json());
app.get("/", (req, res) => {
  return res.json([{ message: "hello" }]);
});
app.listen(8800, () => {
  return console.log("Hello from ");
});
