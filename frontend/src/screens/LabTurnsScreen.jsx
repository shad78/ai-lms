import React from "react";
import Program from "../components/Program";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const LabTurnsScreen = ({ id }) => {
  return (
    <>
      <Program />
      <Link to={`/course/${id}/add-prog`}>
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title>
              Add Program <i className="fa-solid fa-plus ms-1"></i>
            </Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
};

export default LabTurnsScreen;
