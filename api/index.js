import express from "express";
import dotenv from "dotenv"
import connect2mongo from "./db/connect2mongo.js";
dotenv.config();

const app = express();

const port = process.env.PORT;

app.listen(port, () => {
  connect2mongo()
  console.log(`Server running on port - ${port}`);
});
