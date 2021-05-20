import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Fade } from "react-reveal";

export default function Home() {
  return (
    <Layout>
      <title>About Amy Lo</title>
      <Fade bottom>
        <h1>Amy Lo (she/her)</h1>
        <h2>I'm a Computer Science and Psychology major at Stanford.</h2>
        <hr />
        <StaticImage
          src="../images/about/me.jpg"
          alt="A dinosaur"
          placeholder="blurred"
          layout="fullWidth"
          quality="100"
        />
        <hr />
        <h3>
          I like exploring how code, neuroscience, and design all intersect.{" "}
        </h3>
        <p>
          I want to build better tools based on research, data, and psychology
          principles that can help our tired human brains focus on what's really
          important in life: family, friends, culture, and a good old-fashioned
          game of Mario Kart. (Rainbow Road, anyone?)
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
          exploration tools and redesigning data courses for small businesses.
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
        <br />
      </Fade>
    </Layout>
  );
}
