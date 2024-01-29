import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import axios from "axios";

const HomeScreen = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data } = await axios.get("/api/courses");
      setCourses(data);
    };
    fetchCourses();
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <Row>
        {courses.map((course) => (
          <Col sm="12" md="6" lg="4" xl="3">
            <CourseCard course={course} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col sm="12" md="6" lg="4" xl="3">
          <Link to={"/add-course"}>
            <Card>
              <Card.Body>
                <Card.Title>
                  Add Course <i className="fa-solid fa-plus ms-1"></i>
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default HomeScreen;
