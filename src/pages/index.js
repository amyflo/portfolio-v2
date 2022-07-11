import React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Row from "react-bootstrap/Row"
import { StaticImage } from "gatsby-plugin-image";
import Container from "react-bootstrap/Container";
import HomeCard from "../components/HomeCard/HomeCard";


export default function Home() {
  return (
    <Layout>
      <title>Amy Lo</title>
      <Hero intro="I study neuroscience and human-computer interaction at Stanford. 
        I'm passionate about ethical tech, system design, and human-centric experiences. 
        I love making things, especially bad jokes." job="Summer Analyst at Accenture Song."/>
      <br />


      <Container>
        <hr />
        <h2>Featured Projects</h2>
        <Row>
        <HomeCard link="/spacemail" headline="SpaceMail"
            text="A narrative game about delivering packages in space."
            badge1="Unity"
            badge2="Digital game"
          >
            <StaticImage className="header-image"
              src="../images/headers/spacemail.png" alt="A dinosaur" />
          </HomeCard>
          <HomeCard link="/bunnyworld" headline="BunnyWorld"
            text="An Android app for creating, editing, and playing custom games."
            badge1="Java"
            badge2="Android App"
          >
            <StaticImage className="header-image"
              src="../images/headers/bunnyworld.png" alt="A dinosaur" />
          </HomeCard>
          <HomeCard link="/stamply" headline="Stamply"
            text="A digital rewards app for shopping small businesses. 
            1st place, Adobe Creative Jam."
            badge1="UX Design"
            badge2="Hackathon"
          >
            <StaticImage className="header-image"
              src="../images/headers/stamply.png" alt="A dinosaur" />
          </HomeCard>
          <HomeCard link="/nutrikitchen" headline="Nutrikitchen"
            text="A smart kitchen and health app.
            Finalist, Adobe Creative Jam."
            badge1="UX Design"
            badge2="Hackathon"
          >
            <StaticImage className="header-image"
              src="../images/headers/nutrikitchen.png" alt="A dinosaur" />
          </HomeCard>
          <HomeCard link="/onetoday" headline="Google One Today"
            text="Redesigning social donations for a failed Google product. 3rd place, Wellesley REVIVE Designathon."
            badge1="UX Design"
            badge2="Hackathon"
          >
            <StaticImage className="header-image"
              src="../images/headers/google.png" alt="A dinosaur" />
          </HomeCard>
        </Row>
      </Container>

    </Layout >
  );
}
