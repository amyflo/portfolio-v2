import React from "react";
import Layout from "../components/layout";
import Fade from "react-reveal/Fade";
import HomeCard from "../components/HomeCard";
import Row from "react-bootstrap/Row";

export default function Home() {
  return (
    <Layout>
      <title>About Amy Lo</title>
      <Fade bottom>
        <h1>Amy Lo</h1>
        <h2>Currently designing at the Federal Reserve Board.</h2>
        <h3>
          I like exploring how code, psychology, and design all intersect.{" "}
        </h3>
        <p>
          I want to build better tools based on research, data, and
          psychological principles that can help our tired human brains focus on
          what's really important in life: family, friends, culture, and a good
          old-fashioned game of Mario Kart. I became interested in product
          design and code after attending some of my first few classes at
          Stanford, where I was amazed by how technology could be shaped and
          molded to influence people's behavior and biology.
        </p>
        <h3>
          Professionally, I've worked across both the public and private
          sectors.
        </h3>

        <p>
          I took a gap year off of Stanford after my freshman year during the
          pandemic to intern from 2020-2021! Most recently, I've been analyzing
          page traffic and revenue data for Lenovo.com's eCommerce team, where I
          also got to present to a CMO and help manage the launch of 18 products
          globally. I've previously spent time at the U.S. Census Bureau through
          Coding it Forward's Civic Digital Fellowship, coding better survey
          exploration tools and redesigning data courses.
        </p>
        <p>
          In other stints, I've designed creative for 2020 political campaigns
          with 50+1 Strategies, launched Stanford's first Open Datathon, and
          researched cultural psychology and tech history at Stanford.
        </p>
        <h3>My motto: Love what you do, and you'll do what you love.</h3>
        <p>
          It's a simple motto – yet I stand by it everyday. I've made it my life
          to pursue what I love. I'm always up to something new! I can't be seen
          without my laptop in hand (with every fan running from having VSCode,
          Figma, Adobe CC, and the terminal all open at the same time).
        </p>

        <Row style={{ maxWidth: "1000px", margin: "10px auto" }}>
          {/* <HomeCard
            link="/courses"
            headline="📚 Courses I've taken"
            text="A collection of classes I've taken so far at Stanford University from frosh to sophomore year. Updated May 2021."
          /> */}
          <HomeCard
            link="/fails"
            headline="💔 Failure resume"
            text="Facing my fear: where I document my mistakes and growth over time and look back on my career journey."
          />
          <HomeCard
            link="/list"
            headline="💌 My corner of the internet"
            text="My digital list of people and experiences that inspire me everyday to be a better designer, coder, and human."
          />
        </Row>
      </Fade>
    </Layout>
  );
}
