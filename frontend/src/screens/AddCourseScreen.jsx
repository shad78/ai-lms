import React, { useState } from "react";
import FormContainer from "../components/FormContainer";
import { Button, Form } from "react-bootstrap";
import Select from "react-select";
import { teachers } from "../data";

const AddCourseScreen = () => {
  const semesterOptions = Array.from({ length: 8 }, (_, index) => ({
    value: index + 1,
    label: index + 1,
  }));

  const teacherOptions = teachers.map((teacher) => ({
    value: teacher.name,
    label: `${teacher.name} (${teacher.code})`,
  }));

  const [numberOfStudents, setNumberOfStudents] = useState(0);
  const [selectedStudents, setSelectedStudents] = useState([]);

  const renderStudentSelectionGrid = () => {
    const grid = [];

    for (let i = 1; i <= numberOfStudents; i++) {
      grid.push(
        <Form.Check
          key={i}
          type="checkbox"
          label={i.toString()}
          checked={selectedStudents.includes(i)}
          onChange={() => handleStudentCheckboxChange(i)}
        />
      );
    }

    return grid;
  };

  const handleStudentCheckboxChange = (studentNumber) => {
    setSelectedStudents((prevSelected) => {
      if (prevSelected.includes(studentNumber)) {
        return prevSelected.filter((num) => num !== studentNumber);
      } else {
        return [...prevSelected, studentNumber];
      }
    });
  };

  return (
    <FormContainer>
      <h3>Add a new Course</h3>
      <Form>
        <Form.Group className="my-2">
          <Form.Label>Course Name</Form.Label>
          <Form.Control placeholder="Enter Course Name"></Form.Control>
        </Form.Group>
        <Form.Group className="my-2">
          <Form.Label>Course Code</Form.Label>
          <Form.Control placeholder="Enter Course Code"></Form.Control>
        </Form.Group>
        <Form.Group className="my-2">
          <Form.Label>Enter Session</Form.Label>
          <Form.Control placeholder="Eg. 2023-24"></Form.Control>
        </Form.Group>
        <Form.Group className="my-2">
          <Form.Label>Select Semester</Form.Label>
          <Select options={semesterOptions} />
        </Form.Group>
        <Form.Group className="my-2">
          <Form.Label>Add Teachers</Form.Label>
          <Select options={teacherOptions} isMulti />
        </Form.Group>
        <Form.Group className="my-2">
          <Form.Label>Enter no. of Students</Form.Label>
          <Form.Control
            placeholder="Eg. 31"
            onChange={() => setNumberOfStudents(31)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-2">
          <Form.Label>Select Cancel Students</Form.Label>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}
          >
            {renderStudentSelectionGrid()}
          </div>
        </Form.Group>
      </Form>
      <Button className="my-2 btn btn-block">Create Course</Button>
    </FormContainer>
  );
};

export default AddCourseScreen;
