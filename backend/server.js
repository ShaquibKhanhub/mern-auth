import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin:
      "https://mern-auth-hvkk-9ltf4vbto-shaquibkhanhubs-projects.vercel.app",
    credentials: true,
  })
); // allows us to make requests from the frontend to the backend

app.use(express.json()); // Parse incoming JSON payloads from the request body:req.body

app.use(cookieParser()); // allows us to access the cookies from the request object: req.cookies

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDb();
  console.log("server listening on port:", PORT);
});
