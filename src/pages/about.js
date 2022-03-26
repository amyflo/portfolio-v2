import React from "react";
import Layout from "../components/Layout/Layout";
import Fade from "react-reveal/Fade";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { Link } from "gatsby";
import { Badge } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";


export default function About() {
  return (
    <Layout>
      <title>About Amy Lo</title>
      <Container>
        <Row>

          <Col md="4">
            <StaticImage style={{ "border-radius": "15px" }} src="../images/about/me.jpeg" />
          </Col>
          <Col md="8">
            <Fade bottom>
              <h1>Hi, I'm Amy!</h1>
              <p>
                I'm at Stanford University studying Psychology and Computer Science, set to graduate in June 2024.
                I specialize in neuroscience and human-computer interaction.
              </p>
              <p>
                Professionally, I'm a UX designer and engineer with experience in designing for startups and government experience.
                Last summer, I interned at the Federal Reserve Board of Governors, designing and developing their internal design system.
              </p>
              <p>
                Currently, I am a TA for CS106A (Python) and CS106B (C++), where I teach a weekly section of 10-15 students introductory computer science.
                I'm also a Resident Assistant for a 60-person dorm at Stanford, and research in the Stanford Culture and Emotion Lab and the Stanford Memory Lab,
                where I am working on a VR project studying memory.
              </p>
              <p>
                In my free time, I love picnics, hosting themed parties, and making bad jokes.
              </p>
            </Fade>
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <h2>
            Recently...
          </h2>
          <ul>
            <li>
              The Census Survey Explorer, a project I built in Fall 2020, finally launched on the <a href="census.gov/data/data-tools/survey-explorer/">U.S. Census Bureau's official site!</a> <Badge bg="light">March 2022</Badge>
            </li>
            <li>
              My teammates and I built an Android app for CS108. BunnyWorld is a game editor and game play app. <Link to="/bunnyworld">Check out our work here.</Link> <Badge bg="light">March 2022</Badge>
            </li>
            <li>
              I was selected to study abroad at Oxford University in the fall of 2022 in experimental psychology! <Badge bg="light">February 2022</Badge>
            </li>
            <li>
              I'm joining Accenture as a Summer Analyst. I'm excited to work for a company that will give me the opportunity to explore. <Badge bg="light">November 2021</Badge>
            </li>
            <li>
              I became a CS106 section leader (TA)! In September, I'll start to teach introductory Python and C++ for Stanford's largest introductory computer science course at Stanford. <Badge bg="light">August 2021</Badge>
            </li>
          </ul>
        </Row>
      </Container>
    </Layout >
  );
}