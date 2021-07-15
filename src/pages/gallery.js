import React from "react";
import Layout from "../components/layout";
import Fade from "react-reveal/Fade";
import Row from "react-bootstrap/Row";
import HomeCard from "../components/HomeCard";
import { StaticImage } from "gatsby-plugin-image";

export default function Home() {
  return (
    <Layout>
      <title>Amy Lo</title>
      <Fade top>
        <h2>Gallery</h2>
        <h1>A collection of work.</h1>
      </Fade>

      <div className="home-container">
        <Row style={{ maxWidth: "1000px", margin: "10px auto" }}>
          <HomeCard
            md="6"
            link="/onetoday"
            headline="Google One Today"
            text="Redesigning social donations for a failed Google product. Won 3rd place at Wellesley's REVIVE Designathon."
          >
            <StaticImage
              src="../images/headers/google.png"
              alt="Mocckup of two phone screens showcasing donations next to Google logo in the center."
            />
          </HomeCard>
          <HomeCard
            md="6"
            link="/censusacademy"
            headline="U.S. Census Bureau: Census Academy"
            text="Envisioning data education for the nation's largest provider of data."
          >
            <StaticImage
              src="../images/headers/CensusAcademy.png"
              alt="Mockup of Census Academy webpage with two screenshots of redesigned home page and course page."
            />
          </HomeCard>

          <HomeCard
            md="6"
            link=""
            headline="Federal Reserve Board - WIP"
            text="Building a design system for the Monetary Affairs Team to create better financial tools."
          >
            <StaticImage
              src="../images/headers/frb.png"
              alt="Federal Reserve Board logo on a blue background."
            />
          </HomeCard>
          <HomeCard
            md="6"
            link=""
            headline="Lenovo - WIP"
            text="Visualizing page traffic and over $807 million in revenue for the WorldWide eCommerce team."
          >
            <StaticImage
              src="../images/headers/Lenovo.png"
              alt="Lenovo box logo on a gradient background."
            />
          </HomeCard>
        </Row>
      </div>
    </Layout>
  );
}
