import mongoose from "mongoose";
import dotenv from "dotenv";
import teachers from "./data/teachers.js";
import students from "./data/students.js";
import Teacher from "./models/teacherModel.js";
import Student from "./models/studentModel.js";
import Course from "./models/courseModel.js";
import Program from "./models/programModel.js";
import Evaluation from "./models/evaluationModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Teacher.deleteMany();
    await Student.deleteMany();
    await Course.deleteMany();
    await Program.deleteMany();
    await Evaluation.deleteMany();

    await Student.insertMany(students);
    await Teacher.insertMany(teachers);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.log(`Error : ${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Teacher.deleteMany();
    await Student.deleteMany();
    await Course.deleteMany();
    await Program.deleteMany();
    await Evaluation.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.log(`Error : ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
