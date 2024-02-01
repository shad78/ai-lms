import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/teacherActions";
import { useLocation, useNavigate } from "react-router-dom";

export default function LoginScreen() {
  const [teacherCode, setTeacherCode] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const teacherLogin = useSelector((state) => state.teacherLogin);

  const { loading, error, teacherInfo } = teacherLogin;

  const redirect = location.search ? location.search.split("=")[1] : "";

  useEffect(() => {
    if (teacherInfo) {
      navigate(`/${redirect}`);
    }
  }, [navigate, teacherInfo, redirect]);

  function submitHandler(e) {
    e.preventDefault();
    dispatch(login(teacherCode, password));
  }

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Teacher Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Teacher Code (uppercase)"
            value={teacherCode}
            onChange={(e) => setTeacherCode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password" className="mt-2 mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </Form>
    </FormContainer>
  );
}
