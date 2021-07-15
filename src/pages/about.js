import React from "react";
import Layout from "../components/layout";
import Fade from "react-reveal/Fade";
import HomeCard from "../components/HomeCard";
import Row from "react-bootstrap/Row";

export default function About() {
  return (
    <Layout>
      <title>About Amy Lo</title>
      <Fade bottom>
        <h1>
          Hi, I'm Amy.
        </h1>

        <h3>Studying Computer Science and Psychology at Stanford from
          Los Angeles.</h3>
        <p>
          Here is a reminder to anyone on my corner of the internet that behind
          this website is a real human bean. I am a daughter, sister,
          granddaughter, and friend.
        </p>
        <p>
          What motivates me has always been my family and grandparents who
          inspire me to make the most out of my life, reminding me to stay
          upbeat despite failures and setbacks. I want to be measured not by my
          professional achievements but by the vibrancy of my life. After a gap
          year working from home, I cultivated my love for frequent trips to my
          grandparents, cooking cultural recipes, blending frozen fruit
          smoothies, gardening, journaling and taking care of my pet fish,
          George.
        </p>
        <p>
          I am easily touched by acts of kindness and hope to create a positive
          impact in the world. I am inspired by the many, many mentors, friends,
          and random individuals that I meet, virtually or physically. I know
          that there are stories that are out there, untold, that I would like
          to share in my work and journey. I aspire to be a good person first
          and everything else second.
        </p>
        <h3>This is what I care about.</h3>

        <p>
          I am a designer who learned how to code because I was frustrated with
          not knowing what happens after the handoff for a design. During the
          pandemic, I taught myself HTML, CSS, JavaScript, React, and currently
          am learning Swift / SwiftUI. I wanted to figure out how the pixels I
          pushed translated into real tools and webpages. Learning programming
          languages has made me understand the challenges for developers to
          build UI. Thus, I’m passionate about creating design systems,
          productivity solutions, and flexible, fast frontend.
        </p>
        <p>
          I care about inclusivity and social change – I led in student
          government at the height of the pandemic, advocating for sexual
          violence protections, fundraising for the King Institute,
          international student visa protections, and racial justice. I also led
          my own #BlackLivesMatter campaign titled #CommissionsForChange,
          raising close to 37 thousand dollars in donations from illustrations
          and corporate matching. I think that the tech world has room to be
          more compassionate, empathetic, and authentic in how we can solve
          problems for users of all needs.
        </p>
        <h3>What I do: the "professional" stuff.</h3>
        <p>
          For work, I translate components to code in React and Sass and build
          the design system at the Federal Reserve Board. I also intern at
          Airpals, a minority-led courier delivery startup based in Brooklyn,
          focusing on our consumer’s purchasing flow. I’m a mentee for the
          LinkedIn Women [in] Product RiseIn program, where I’m crafting my journey in
          product management and design. I’m also engineering an open-source
          project in SwiftUI through Apple’s Swift Mentorship Program under
          guidance from Craig Clayton, Sr. iOS Engineer.
        </p>
        <p>
          I’ve designed for Lenovo, the U.S. Census Bureau, American Civil
          Liberties Union, Movement for Black Lives, and Council of
          American-Islamic Relations – to name a few. I’m also passionate about
          design education and previously taught graphic design as Managing
          Editor at the Stanford Daily. In other stints, I researched culture
          for the Stanford Tech History Project and consumed dozens of
          psychology papers as a Research Assistant at the Stanford Culture and
          Emotion Lab.
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
