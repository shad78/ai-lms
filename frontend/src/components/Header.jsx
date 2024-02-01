import React from "react";
import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/actions/teacherActions";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const teacherLogin = useSelector((state) => state.teacherLogin);
  const { teacherInfo } = teacherLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header>
      <Navbar expand="lg" bg="dark" variant="dark" collapseOnSelect>
        <Container>
          <LinkContainer to={teacherInfo ? "/" : "/login"}>
            <Navbar.Brand>
              <Image
                src="/images/home.png"
                style={{ width: "2rem", height: "2rem" }}
              />{" "}
            </Navbar.Brand>
          </LinkContainer>
          {teacherInfo && (
            <>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                  <LinkContainer to="/" className="mx-1">
                    <Nav.Link>
                      <i className="fa-solid fa-house mx-1"></i> Home
                    </Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/active-eval" className="mx-1">
                    <Nav.Link>
                      <i className="fa-solid fa-marker mx-1"></i> Active
                      Evaluation
                    </Nav.Link>
                  </LinkContainer>
                  <NavDropdown title={teacherInfo.name} id="username">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </>
          )}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
