import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <Container>
        <hr />
        <Row>
          <Col lg className="footer-about">
            <h1>Get in touch</h1>            
            <p>
              Our time together doesn't have to end so soon! I love making new friends: let's talk! <br/>
              <a href="https://calendly.com/amyflo/checkin">Meet with me</a>&nbsp;&nbsp;| &nbsp;
              <a href="https://drive.google.com/file/d/1L1p-WXAM82CJWqHLKQoCDfzZTYkeicsy/view?usp=sharing">Resume</a> &nbsp;&nbsp;| &nbsp;
              <a href="http://twitter.com/_amyflo">Twitter</a>&nbsp;&nbsp;| &nbsp;
              <a href="http://linkedin.com/amyflo">LinkedIn</a>&nbsp;&nbsp;| &nbsp;
              <a
                href="mailto:amyflo@stanford.edu"
                target="_blank"
                rel="noreferrer"
              >
                Email </a>
              <br/>
              <a className="footer-link"
                href="https://github.com/amyflo/portfolio-website"
                target="_blank"
                rel="noreferrer"
              >
                Open-source portfolio built on React + Gatsby.
              </a>


            </p>
            {/* <Button
              href="https://calendly.com/amyflo/checkin"
              text="Meet with me"
              variant="light"
            />
            <Button
              href="https://drive.google.com/file/d/1qDcGEYL3gGRbkDgwN4Irhz7-vaU5Ojyy/view?usp=sharing"
              text="Get my resume"
              variant="light"
            />
          </Col> */}
            {/* <Col lg>
            <ListGroup>
              <ListItem
                variant="light-list"
                href="mailto:amyflo@stanford.edu"
                text="Email"
              />
              <ListItem
                variant="light-list"
                href="https://www.linkedin.com/in/amyflo/"
                text="LinkedIn"
              />
              <ListItem
                variant="light-list"
                href="https://drive.google.com/file/d/10h0liBXZUXemYVPQSm1lXy3pdHP8u1ki/view"
                text="Resume"
              />
              <ListItem
                variant="light-list"
                href="https://github.com/amyflo"
                text="GitHub"
              />
            </ListGroup> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
