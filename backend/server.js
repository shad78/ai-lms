import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import courseRoutes from "./routes/courseRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/courses", courseRoutes);
app.use("/api/teachers", teacherRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
