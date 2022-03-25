import React from "react";
import "./hero.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

function Hero(props) {
  return (
    <Container className="hero-background">
      <Row >
        <Col md={9}>
          <h1>
            Hello, I'm Amy Lo. <br/> 
            UX Designer and UX Engineer. 
          </h1>
          <p className="hero-p">{props.intro}</p>
        </Col>
        <Col md={3}>
          {/* <img src="https://i.imgur.com/kDDFvUp.png" class="rotate" width="200" height="200" /> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
