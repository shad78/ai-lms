import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Select from "react-select";
import { teachers } from "../data";
import FormContainer from "../components/FormContainer";

const AddProgramScreen = () => {
  const teacherOptions = teachers.map((teacher) => ({
    value: teacher.name,
    label: `${teacher.name} (${teacher.code})`,
  }));

  const [selectedStudents, setSelectedStudents] = useState([]);

  const renderStudentSelectionGrid = () => {
    const grid = [];

    for (let i = 1; i <= 31; i++) {
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
      <div style={{ textAlign: "center" }}>
        <h3>Add Program</h3>
        <h4>Program 1 | Python Programming Lab</h4>
        <h5>25-01-24</h5>
      </div>

      <Form>
        <Form.Group className="my-2">
          <Form.Label>Enter Program Name</Form.Label>
          <Form.Control placeholder="Eg. N Queens Problem"></Form.Control>
        </Form.Group>
        <Form.Group className="my-2">
          <Form.Label>Teachers Attendance</Form.Label>
          <Select
            options={teacherOptions}
            defaultValue={[...teacherOptions]}
            isMulti
          />
        </Form.Group>
        <Form.Group className="my-2">
          <Form.Label>Students Attendance</Form.Label>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}
          >
            {renderStudentSelectionGrid()}
          </div>
        </Form.Group>
      </Form>
      <Button className="my-2" style={{ width: "100%" }}>
        Create Program 1
      </Button>
    </FormContainer>
  );
};

export default AddProgramScreen;
