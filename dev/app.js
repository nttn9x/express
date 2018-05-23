import express from "express";

const app = express();

app.use((req, res, next) => {
  res.status(200).json({
    message: "It work a a s!"
  });
});

export default app;
