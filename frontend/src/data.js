export const courses = [
  {
    _id: 1,
    name: "Python Programming Lab",
    code: "AIC2940",
    session: "2023-24",
    semester: 4,
    teachers: ["JAR", "NS", "AK", "NSU", "SMSK", "MA"],
    num_students: 30,
  },
  {
    _id: 2,
    name: "Deep Learning Lab",
    code: "AIC3970",
    session: "2023-24",
    semester: 6,
    teachers: ["JAR", "NS", "AK", "WH", "SMSK", "MA"],
    num_students: 31,
    cancel_students: [3],
  },
];

export const teachers = [
  { name: "Junaid Ali Reshi", code: "JAR" },
  { name: "Nadia Siddiqui", code: "NS" },
  { name: "Aysha Khan", code: "AK" },
  { name: "Waqarul Hasan", code: "WH" },
  { name: "Nawab Shahzeb Uddin", code: "NSU" },
  { name: "Shad Md Shadab Khan", code: "SMSK" },
  { name: "Mohd Adil", code: "MA" },
];

export const evalSummary = [
  {
    s_no: 1,
    evals: [
      {
        program_no: 1,
        evaluator: "NS",
        marks: 8,
      },
      {
        program_no: 2,
        evaluator: "AK",
        marks: 7,
      },
      {
        program_no: 3,
        evaluator: "JAR",
        marks: 7.5,
      },
    ],
  },
  {
    s_no: 2,
    evals: [
      {
        program_no: 1,
        evaluator: "SMSK",
        marks: 8.5,
      },
      {
        program_no: 2,
        evaluator: "MA",
        marks: 7,
      },
      {
        program_no: 3,
        evaluator: "NSU",
        marks: 9,
      },
    ],
  },
  {
    s_no: 3,
    evals: [
      {
        program_no: 1,
        evaluator: "JAR",
        marks: 8.5,
      },
      {
        program_no: 2,
        evaluator: "MA",
        marks: 6.5,
      },
      {
        program_no: 3,
        evaluator: "WH",
        marks: 8.5,
      },
    ],
  },
  {
    s_no: 4,
    evals: [
      {
        program_no: 1,
        evaluator: "NS",
        marks: 7.5,
      },
      {
        program_no: 2,
        evaluator: "MA",
        marks: 7,
      },
      {
        program_no: 3,
        evaluator: "AK",
        marks: 6.5,
      },
    ],
  },
];
