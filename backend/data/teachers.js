import bcrypt from "bcryptjs";

const teachers = [
  {
    name: "Junaid Ali Reshi",
    code: "JAR",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Nadia Siddiqui",
    code: "NS",
    password: bcrypt.hashSync("123456", 10),
  },
  { name: "Aysha Khan", code: "AK", password: bcrypt.hashSync("123456", 10) },
  {
    name: "Waqarul Hasan",
    code: "WH",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Nawab Shahzeb Uddin",
    code: "NSU",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Shad Md Shadab Khan",
    code: "SMSK",
    password: bcrypt.hashSync("123456", 10),
  },
  { name: "Mohd Adil", code: "MA", password: bcrypt.hashSync("123456", 10) },
];

export default teachers;
