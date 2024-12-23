import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Parse incoming JSON payloads from the request body:req.body


app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDb();
  console.log("server listening on port:", PORT);
});
