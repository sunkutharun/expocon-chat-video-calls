import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";

import connectDB  from "./lib/db.js";

const __dirname = path.resolve();

const app =  express();



app.use(cors({
  origin:"http://localhost:5173",
  credentials:true // allow the frontend to send cookies
}))

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 4433;

app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/chat", chatRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}


connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ Connection error:", err);
  });
