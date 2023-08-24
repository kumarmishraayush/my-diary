import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";

const Navbars = () => {
  const handleLogout = () =>
  {
    localStorage.removeItem('token');
  }
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>My- Diary</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/About">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/SignUp">
                <Nav.Link>SignUp</Nav.Link>
              </LinkContainer>



              <LinkContainer to="/Login">
              <Button variant="primary" type="submit" onClick={handleLogout}>
               Logout
             </Button>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
