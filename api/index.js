import express from "express";
import dotenv from "dotenv";
import connect2mongo from "./db/connect2mongo.js";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config();

const app = express();

app.use(express.json());

app.listen(process.env.PORT, () => {
  connect2mongo();
  console.log(`Server running on port - ${process.env.PORT}`);
});

//routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
