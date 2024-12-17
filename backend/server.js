import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db/connectDB.js";
import authRoutes from './routes/auth.route.js'

dotenv.config()
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use('/api/auth',authRoutes)

app.listen(3000, () => {
  connectDb()
  console.log("server listening on port 3000");
});

