import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import CardColumns from "react-bootstrap/CardColumns";
import Alert from "react-bootstrap/Alert";
import HomeCard from "../components/HomeCard";

export default function Home() {
  return (
    <Layout>
      <title>Amy Lo</title>
      <Fade bottom>
        <Zoom>
          <StaticImage
            src="../images/about/profile.png"
            alt="Apple Memoji illustration of me, Amy Lo"
            placeholder="blurred"
            layout="fixed"
            width={200}
            height={200}
          />
        </Zoom>
        <Fade top>
          <h1 style={{ textAlign: "center" }}>
            Hi, I'm Amy!{" "}
            <span role="img" aria-label="bear blowing a kiss">
              ʕ•́ᴥ•̀ʔっ♡
            </span>
          </h1>
          <hr />
          <h4>
            I'm a Computer Science and Psychology major at Stanford University.
            I thrive on mango smoothies, clean code, and properly named layers
            on Figma, Sketch, and Photoshop. Previously, I've worked at{" "}
            <a href="http://lenovo.com/">Lenovo</a>, the{" "}
            <a href="https://www.census.gov/">U.S. Census Bureau</a>,{" "}
            <a href="https://www.codingitforward.com/">Coding it Forward</a>,
            and <a href="https://www.50p1.com/">50 + 1 Strategies</a>.
          </h4>
          <Alert variant="danger">
            This portfolio is a work in progress – I'm currently coding up my
            case studies in React! Check my work out on{" "}
            <a href="https://github.com/">Github.</a>
          </Alert>
          <hr />
        </Fade>

        <h3>Case Studies</h3>
        <CardColumns>
          <HomeCard
            link="/censusacademy"
            headline="Census Academy"
            text="UX design and research for the U.S. Census Bureau's data education website for small businesses."
          >
            <StaticImage
              src="../images/headers/CensusAcademy.png"
              alt="Mockup of Census Academy webpage with two screenshots of redesigned home page and course page"
              placeholder="blurred"
              layout="fullWidth"
            />
          </HomeCard>
          <HomeCard
            link="/"
            headline="Federal Reserve Board🔒"
            text="Summer 2021: Designing financial tools for the Monetary Affairs team as an incoming UI/UX intern."
          >
            <StaticImage
              src="../images/headers/frb.png"
              alt="Federal Reserve Board of Governors logo on blue gradient."
              placeholder="blurred"
              layout="fullWidth"
            />
          </HomeCard>
          <HomeCard
            link="/"
            headline="Google OneToday🔒"
            text="Redesigning social donations for a failed Google product. Won 3rd place at Wellesley's REVIVE Designathon."
          >
            <StaticImage
              src="../images/headers/google.png"
              alt="Mocckup of two phone screens showcasing donations next to Google logo in the center."
              placeholder="blurred"
              layout="fullWidth"
            />
          </HomeCard>
        </CardColumns>
        <hr />
        <h3>Programming Projects</h3>
        <CardColumns>
          <HomeCard
            link="/"
            headline="Lenovo🔒"
            text="Visualizing high traffic and high revenue pages 
          in a global content audit in Python and Tableau."
          >
            <StaticImage
              src="../images/headers/Lenovo.png"
              alt="White Lenovo logo on warm-toned gradient."
              placeholder="blurred"
              layout="fullWidth"
            />
          </HomeCard>
          <HomeCard
            link="/"
            headline="Census Survey Explorer🔒"
            text="Built and designed a full-stack web application and search engine for 130+ U.S. Census Bureau Surveys."
          >
            <StaticImage
              src="../images/headers/surveyexplorer.png"
              alt="Screenshot of Census Survey Explorer home page in a desktop mockup on a green gradient background."
              placeholder="blurred"
              layout="fullWidth"
            />
          </HomeCard>
          <HomeCard
            link="/"
            headline="Open Data Campus🔒"
            text="Created a website to teach college students how to use open data. Front-end development."
          >
            <StaticImage
              src="../images/headers/opendata.png"
              alt="3D model of a hand holding a phone with Open Data Campus 
            and a screenshot of the Data Governancce page (Chapter 4)."
              placeholder="blurred"
              layout="fullWidth"
            />
          </HomeCard>
        </CardColumns>
      </Fade>
    </Layout>
  );
}
