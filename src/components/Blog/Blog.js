import React from "react";
import "./Blog.css";
import ListGroup from "../ListGroup/ListGroup";
import ListItem from "../ListItem/ListItem";
import Container from "react-bootstrap/Container";

export default function Blog() {
  return (
    <div className="blog">
      <Container>
        <h1>Thoughts</h1>
        <h4>Read my blog posts on life, design, and work.</h4>
        <ListGroup columns="two">
          <ListItem variant="light-list" href="/fails" text="Failure Resume" />
          <ListItem variant="light-list" href="/list" text="Amy's Corner" />
          <ListItem
            variant="light-list"
            href="https://amyflo.medium.com/five-lessons-i-learned-from-five-months-as-a-lenovo-intern-1c49f11e8f03"
            text="Five lessons from five months at Lenovo"
          />
          <ListItem
            variant="light-list"
            href="/courses"
            text="Courses I've taken at Stanford"
          />
        </ListGroup>
      </Container>
    </div>
  );
}
