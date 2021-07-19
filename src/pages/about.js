import React from "react";
import Layout from "../components/Layout/Layout";
import Fade from "react-reveal/Fade";
import Blog from "../components/Blog/Blog";
import Container from "react-bootstrap/Container";
import { StaticImage } from "gatsby-plugin-image";

export default function About() {
  return (
    <Layout>
      <title>About Amy Lo</title>
      <Fade bottom>
        <div
          style={{ background: "#3E85FF", padding: "40px 0px", color: "white" }}
        >
          <Container>
            <h1 style={{ color: "white" }}>
              I try to be a good person first, and everything else second.
            </h1>
            <StaticImage src="../images/about/me.jpg" />
            <p>
              What’s made me a better designer and developer has been investing
              into my family, friendships, community, and world. My compass in
              life is my empathy. I’ve followed it to Stanford University, where
              I study Computer Science and Psychology hoping to make things that
              leave this world better than when I entered it.{" "}
            </p>
          </Container>
        </div>
        <div
          style={{ background: "black", padding: "40px 0px", color: "white" }}
        >
          <Container>
            <h1 style={{ color: "white" }}>
              I am a designer who learned how to code because I was curious to
              know what happens after I hand off a design to a developer.
            </h1>
            <p>
              During the pandemic, I taught myself HTML, CSS, JavaScript, React,
              and currently am learning Swift / SwiftUI. I wanted to figure out
              how the pixels I pushed translated into real tools and webpages.
              Learning programming languages has made me understand the
              challenges for developers to build UI. Thus, I’m passionate about
              creating design systems, productivity solutions, and flexible,
              fast frontend.
            </p>
          </Container>
        </div>

        <div style={{ background: "#FFB444", padding: "40px 0px" }}>
          <Container>
            <h1>I want to be measured by the vibrancy of my life.</h1>
            <p>
              What motivates me has always been my family and grandparents who
              inspire me to make the most out of my life, reminding me to stay
              upbeat despite failures and setbacks. I want to be measured not by
              my professional achievements but by the vibrancy of my life. After
              a gap year working from home, I cultivated my love for frequent
              trips to my grandparents, cooking cultural recipes, blending
              frozen fruit smoothies, gardening, journaling and taking care of
              my pet fish, George.
            </p>
          </Container>
        </div>
      </Fade>
      <Blog />
    </Layout>
  );
}
