import express from "express";

const app = express();
const port = 5500;

app.get("/hello", (_req, res) => {
  res.send("Вітаємо у світі Node.js і Express!");
});

app.listen(port, () => {
  console.log(`Port: ${port}`);
});
