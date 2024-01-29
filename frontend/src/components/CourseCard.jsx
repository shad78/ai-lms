import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <>
      <Card className="my-3 rounded">
        <Card.Body>
          <Card.Title>{course.name}</Card.Title>
          <Card.Text as="p">{course.code}</Card.Text>
          <Card.Text as="p">{course.semester}th Semester</Card.Text>
          <Card.Text as="p">{course.session}</Card.Text>
          <Link className="btn btn-primary" to={`/course/${course._id}`}>
            Open <i className="fa-solid fa-arrow-right ms-1"></i>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default CourseCard;
