import mongoose from "mongoose";

const programSchema = mongoose.Schema(
  {
    course: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Course",
    },
    p_no: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    teachersPresent: [
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
    studentsPresent: [
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

const Program = mongoose.model("Program", programSchema);

export default Program;
