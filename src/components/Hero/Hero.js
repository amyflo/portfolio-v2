import React from "react";
import "../Layout/layout.module.css";
import "./hero.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container, Badge } from "react-bootstrap";

function Hero() {
  return (
    <Container className="hero">
      <Row>
        <Col>
          <h1>
            Amy is a designer who blends the study of ethical tech, system
            design, and emotion in the brain.
          </h1>
          <p>
            Amy has designed and developed for government agencies, startups,
            nonprofits, hackathons, community organizations, & many more. She studies affective
            neuroscience at Stanford (where she also leads a 60-person dorm)!
            Incoming Summer Analyst at Accenture. <a href="https://drive.google.com/file/d/1L1p-WXAM82CJWqHLKQoCDfzZTYkeicsy/view?usp=sharing">View her resume here.</a>
          </p>
        </Col>
      </Row>
      <Row>
        <Col md="6" sm="12">
          <h2 className="hero-h2">Currently</h2>
          <p>
            <b>Stanford University</b>, B.A. in Psychology, B.S. in Computer Science <br />
            <b>Teaching Assistant</b>, Programming Abstractions<br />
            <b>Research Assistant</b>, Memory Lab<br />
            <b>Research Assistant</b>, Culture and Emotion Lab<br />
          </p>
        </Col>

        <Col md="6" sm="12">
          <h2 className="hero-h2">Previously</h2>
          <p>
            <b>Federal Reserve Board</b>, Monetary Affairs <br />
            <b>50+1 Strategies</b>, Creative<br />
            <b>Lenovo</b>, WorldWide eCommerce<br />
            <b>U.S. Census Bureau</b>, CLMSO<br />
          </p>
        </Col>
      </Row>
      <hr />

      <h2 id="archive">Archive</h2>
      <p>This is a work in progress! Links are still being updated.</p>
      <Row >
        <Col>
          <h3>2022</h3>
          <ol>
            <li><a href="http://tobincapital.com">Building a brand for future founders for Tobin Capital.</a></li>
            <li>An Android app to play Tetris.</li>
          </ol>
        </Col>
        <Col lg="3">
          <p className="sidenote"><em>2022 is just getting started!</em>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>2021</h3>
          <ol>
            <li><a href="https://www.amyflo.com/stamply/">Stamply: a digital stamp card app on Android, 1st place Adobe Creative Jam winner.</a><Badge bg="primary">Case Study</Badge></li>
            <li><a href="https://www.amyflo.com/nutrikitchen">Nutrikitchen: a smart kitchen and health app, finalist for Adobe Creative Jam.</a><Badge bg="primary">Case Study</Badge></li>
            <li><a href="https://www.amyflo.com/onetoday/">Revamping Google OneToday in 24 hours, 3rd place at Wellesley Revive Designathon.</a><Badge bg="primary">Case Study</Badge></li>
            <li><a href="https://www.amyflo.com/lenovo">Visualizing page traffic and revenue for Lenovo WorldWide eCommerce.</a><Badge bg="primary">Case Study</Badge></li>
            <li><a href="https://www.amyflo.com/fed/">Building a design system at the Federal Reserve Board.</a><Badge bg="primary">Case Study</Badge></li>
            <li><a href="https://opendatacampus.com/">A guide to open data for college campuses.</a></li>
            <li><a href="https://datathon.stanford.edu/">Designing Stanford's first Open Data Hackathon.</a></li>
            <li><a href="https://techhistory.stanford.edu/">Researching a decade of Stanford tech culture.</a></li>
            <li>Videos and advertisements created for Lenovo.</li>
            <li>A Mulan-inspired ray-traced image using Blender Cycles.</li>
            <li>A simple recursive ray tracer using the Blinn-Phong model.</li>
            <li>A Monte-Carlo recursive ray tracer of the Classic Cornell box.</li>
          </ol>
        </Col>
        <Col lg="3">
          <p className="sidenote"><em>2021 was arguably one of my busiest years. I wrapped up my internships,
            started entering design hackathons, and found a niche in open data.
            <br />
            <br />
            Oh, and I also started classes at Stanford again!</em>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>2020</h3>
          <ol>
            <li><a href="https://www.instagram.com/p/CBUe6e2JIIF/">Commissions For Change</a></li>
            <li><a href="https://www.amyflo.com/censusacademy/">Census Academy: Designing an e-learning site for data education.</a><Badge bg="primary">Case Study</Badge></li >
            <li><a href="https://sites.google.com/stanford.edu/standwithking">Stand with King: Fundraising for the King Institute.</a></li >
            <li><a href="https://www.instagram.com/outsideourbubble.whs/?hl=en">Outside Our Bubble: Discussions around racism for high school students.</a></li >
            <li><a href="http://angle.global">Designing for a startup to teach English through spelling bees.</a></li>
            <li><a href="https://uscensusbureau.github.io/censussurveys/">Search and filter tool to explore 130+ Census surveys.</a></li>
            <li>Voter advocacy with the Council of American-Islamic Relations.</li>
            <li>A Get Out the Vote campaign with American Civil Liberties Union.</li>
            <li>Breathe Day campaign with the Movement for Black Lives</li>
            <li>Political Campaigns with 50+1 Strategies</li>
            <li>A collection of graphics designed for the Stanford Daily.</li>
          </ol>
        </Col>
        <Col lg="3">
          <p className="sidenote"><em>2020: The start of the pandemic. I spontaneously took a gap year, interned at startups
            and government, and designed for 20+ political campaigns.</em>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
