import React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import { StaticImage } from "gatsby-plugin-image";
import { Container } from "react-bootstrap";


export default function Home() {
  return (
    <Layout>
      <title>Amy Lo</title>
      <Container>   
        {/* <StaticImage
            src="../images/graphic.jpg"
            width={"230px"}
            height={"300px"}
            alt="Blue line art of a brain, mouse cursor, heart, and a lightning bolt."
          />    */}
        <Hero />
      </Container>
    </Layout >
  );
}
