import express from "express";
const router = express.Router();
import {
  authTeacher,
  getTeacherProfile,
  registerTeacher,
} from "../controllers/teacherController.js";

import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(registerTeacher);
router.post("/login", authTeacher);
router.route("/profile").get(protect, getTeacherProfile);

export default router;
