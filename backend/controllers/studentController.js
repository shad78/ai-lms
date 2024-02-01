import express from "express";
const router = express.Router();
import {
  authTeacher,
  getAllTeachers,
  getTeacherProfile,
  registerTeacher,
  updateTeacherProfile,
} from "../controllers/teacherController.js";

import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(registerTeacher);
router.route("/all").get(protect, getAllTeachers);
router.post("/login", authTeacher);
router
  .route("/profile")
  .get(protect, getTeacherProfile)
  .put(protect, updateTeacherProfile);

export default router;
