import React from "react";
import "./hero.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "gatsby"
import { Button, Container } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

function Hero(props) {
  return (
    <Container className="hero-background">
      <Row >
        <Col md={9}>
          <h1 style={{maxWidth: "1200px"}}>
            Hello, I'm Amy Lo. <br />
            UX Designer and UX Engineer.
          </h1>
          <p className="hero-p">{props.intro}</p>
          <p className="hero-p">{props.job}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
