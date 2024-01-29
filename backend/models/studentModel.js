import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
  {
    s_no: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    fac_no: {
      type: String,
      required: true,
    },
    en_no: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

export default Student;
