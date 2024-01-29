import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" bg="dark" variant="dark" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <Image
                src="/images/home.png"
                style={{ width: "2rem", height: "2rem" }}
              />{" "}
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <LinkContainer to="/" className="mx-1">
                <Nav.Link>
                  <i className="fa-solid fa-house mx-1"></i> Home
                </Nav.Link>
              </LinkContainer>
              {/* <LinkContainer to="/past-eval" className="mx-1">
                <Nav.Link>
                  <i className="fa-solid fa-box-archive mx-1"></i> Past
                  Evaluations
                </Nav.Link>
              </LinkContainer> */}
              <LinkContainer to="/active-eval" className="mx-1">
                <Nav.Link>
                  <i className="fa-solid fa-marker mx-1"></i> Active Evaluation
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/profile" className="mx-1">
                <Nav.Link>
                  <i className="fa-solid fa-user mx-1"></i> My Profile
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
