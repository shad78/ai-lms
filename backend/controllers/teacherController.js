import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import Teacher from "../models/teacherModel.js";

// @desc    Auth teacher & get token
// @route   POST /api/teachers/login
// @access  Public
const authTeacher = asyncHandler(async (req, res) => {
  const { code, password } = req.body;

  const teacher = await Teacher.findOne({ code });

  if (teacher && (await teacher.matchPassword(password))) {
    res.json({
      _id: teacher._id,
      name: teacher.name,
      code: teacher.code,
      token: generateToken(teacher._id),
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
});

//@desc Register a new teacher
//@route POST /api/teachers
//@access Admin
const registerTeacher = asyncHandler(async (req, res) => {
  try {
    const { name, code, password } = req.body;

    const teacherExists = await Teacher.findOne({ code });

    if (teacherExists) {
      res.status(400).json({ message: "Teacher already exists" });
    }
    const teacher = await Teacher.create({
      name,
      code,
      password,
    });
    if (teacher) {
      res.status(201).json({
        _id: teacher._id,
        name: teacher.name,
        code: teacher.code,
        token: generateToken(teacher._id),
      });
    } else {
      res.status(400).json({ message: "Invalid teacher data" });
    }
  } catch (error) {
    throw new Error(error);
  }
});

//@desc Get user profile
//@route GET /api/users/profile
//@access Private
const getTeacherProfile = asyncHandler(async (req, res) => {
  const teacher = await Teacher.findById(req.teacher._id);
  if (teacher) {
    res.json({
      _id: teacher._id,
      name: teacher.name,
      code: teacher.code,
    });
  } else {
    res.status(404).json({ message: "Teacher not found" });
  }
});

export { authTeacher, registerTeacher, getTeacherProfile };
