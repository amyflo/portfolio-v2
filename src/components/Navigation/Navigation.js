import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./navigation.css";

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <h4 className="underline">Amy Lo</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">
              <h6 className="underline">Home</h6>
            </Nav.Link>
            <Nav.Link href="/dev">
              <h6 className="underline">Code</h6>
            </Nav.Link>
            <Nav.Link href="/resume">
              <h6 className="underline">Resume</h6>
            </Nav.Link>
            <a className="nav-link" href="https://www.linkedin.com/in/amyflo/">
              <h6 className="underline">LinkedIn</h6>
            </a>
            <Nav.Link href="/about">
              <h6 className="underline">About</h6>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
