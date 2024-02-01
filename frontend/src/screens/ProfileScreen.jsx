import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message.jsx";
import Loader from "../components/Loader.jsx";
import {
  getTeacherDetails,
  updateTeacherDetails,
} from "../redux/actions/teacherActions.js";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const teacherDetails = useSelector((state) => state.teacherDetails);
  const { loading, error, teacher } = teacherDetails;

  const teacherLogin = useSelector((state) => state.teacherLogin);
  const { teacherInfo } = teacherLogin;

  const teacherUpdate = useSelector((state) => state.teacherUpdate);
  const { success } = teacherUpdate;

  useEffect(() => {
    if (!teacherInfo) {
      navigate("/login");
    } else {
      if (!teacher.name) {
        dispatch(getTeacherDetails("profile"));
      } else {
        setName(teacher.name);
        setCode(teacher.code);
      }
    }
  }, [dispatch, navigate, teacherInfo, teacher]);

  function submitHandler(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      if (teacherInfo && teacherInfo._id) {
        dispatch(updateTeacherDetails({ id: teacher._id, password }));
      }
    }
  }

  return (
    <Row>
      <Col>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {success && (
          <Message variant="success">Password Update Success</Message>
        )}
        {loading && <Loader />}
        <h3>Teacher Profile</h3>

        <h5>{name}</h5>
        <h5 className="mb-3">Teacher Code : {code}</h5>

        <h3 className="mt-3">Change Password</h3>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="password" className="mt-2">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="confirmPassword" className="mt-2 mb-4">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary mb-4">
            Change Password
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default ProfileScreen;
