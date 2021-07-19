import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./navigation.css";

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <h4>Amy Lo</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">
              <p className="underline">Home</p>
            </Nav.Link>
            <Nav.Link href="/about">
              <p className="underline">About</p>
            </Nav.Link>
            <a
              className="nav-link"
              href="https://drive.google.com/file/d/10h0liBXZUXemYVPQSm1lXy3pdHP8u1ki/view?usp=sharing"
            >
              <p className="underline">Resume</p>
            </a>
            <a className="nav-link" href="https://www.linkedin.com/in/amyflo/">
              <p className="underline">LinkedIn</p>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
