import mongoose from "mongoose";

const courseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    session: {
      type: String,
      required: true,
    },
    semester: {
      type: Number,
      required: true,
    },
    teachersEnrolled: [
      {
        name: { type: String, required: true },
        code: { type: String, required: true },
        teacher: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Teacher",
        },
      },
    ],
    studentsEnrolled: [
      {
        s_no: { type: Number, required: true },
        name: { type: String, required: true },
        fac_no: { type: String, required: true },
        en_no: { type: String, required: true },
        student: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Student",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
