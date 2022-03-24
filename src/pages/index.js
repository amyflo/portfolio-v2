import React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Row from "react-bootstrap/Row"
import { StaticImage } from "gatsby-plugin-image";
import { Container } from "react-bootstrap";
import HomeCard from "../components/HomeCard/HomeCard";


export default function Home() {
  return (
    <Layout>
      <title>Amy Lo</title>
      <Hero intro="I study neuroscience and human-computer interaction at Stanford. 
        Passionate about ethical tech, system design, and human-centric experiences. 
        Incoming Summer Analyst at Accenture Interactive."/>
      <Container>
        <Row>
          
          <HomeCard link="/stamply" headline="Stamply"
            text="A digital rewards app for shopping small businesses. 
            1st place winner, Adobe Creative Jam."
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
        </Row>
      </Container>

    </Layout >
  );
}
