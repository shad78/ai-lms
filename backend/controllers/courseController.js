import { courses } from "../data/data.js";

const getCourses = (req, res) => {
  res.json(courses);
};

const getCourseById = (req, res) => {
  const course = courses.find((c) => c._id === req.params.id);
  res.json(course);
};

export { getCourses, getCourseById };
