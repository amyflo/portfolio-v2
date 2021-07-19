import React from "react";
import Button from "../Button/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "../ListGroup/ListGroup";
import ListItem from "../ListItem/ListItem";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg className="footer-about">
            <h1>Get in touch</h1>
            <p>
              <a className="footer-link"
                href="https://github.com/amyflo/portfolio-website"
                target="_blank"
                rel="noreferrer"
              >
                Open-source portfolio built on React + Gatsby.
              </a>
            </p>
            <Button
              href="https://calendly.com/amyflo/checkin"
              text="Meet with me"
              variant="dark"
            />
            <Button
              href="https://drive.google.com/file/d/10h0liBXZUXemYVPQSm1lXy3pdHP8u1ki/view"
              text="Get my resume"
              variant="dark"
            />
          </Col>
          <Col lg>
            <ListGroup>
              <ListItem
                variant="dark-list"
                href="mailto:amyflo@stanford.edu"
                text="Email"
              />
              <ListItem
                variant="dark-list"
                href="https://www.linkedin.com/in/amyflo/"
                text="LinkedIn"
              />
              <ListItem
                variant="dark-list"
                href="https://drive.google.com/file/d/10h0liBXZUXemYVPQSm1lXy3pdHP8u1ki/view"
                text="Resume"
              />
              <ListItem
                variant="dark-list"
                href="https://github.com/amyflo"
                text="GitHub"
              />
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
