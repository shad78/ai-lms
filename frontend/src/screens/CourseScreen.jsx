import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import LabTurnsScreen from "./LabTurnsScreen";
import EvaluationsSummaryScreen from "./EvaluationsSummaryScreen";
import axios from "axios";

const CourseScreen = () => {
  const [key, setKey] = useState("lab-turns");

  const { id } = useParams();

  const [course, setCourse] = useState({});

  useEffect(() => {
    const fetchCourse = async () => {
      const { data } = await axios.get(`/api/courses/${id}`);
      setCourse(data);
    };
    fetchCourse();
  }, [id]);

  return (
    <>
      <Link className="btn btn-light mb-3" to="/">
        Go Back
      </Link>
      <h3>{course.name}</h3>
      <h5 className="mb-5">{`${course.code} | ${course.semester}th Semester | ${course.session}`}</h5>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="lab-turns" title="Lab Turns">
          <LabTurnsScreen id={id} />
        </Tab>
        <Tab eventKey="eval-sum" title="Evaluation Summary">
          <EvaluationsSummaryScreen />
        </Tab>
      </Tabs>
    </>
  );
};

export default CourseScreen;
