import React from "react";
import Button from "../Button/Button";
import Fade from "react-reveal/Fade";
import "../Layout/layout.module.css";
import "./hero.css";
import Logo from "../Logo/Logo";

function Hero() {
  return (
    <Fade top>
      <div className="hero">
        <Logo />
        <h1>
          Amy is a designer who likes to code, studying computer science and
          psychology at Stanford.
        </h1>
        <Button variant="dark" text="Get in touch" />
        <Button variant="dark" href="https://google.com" text="View all work" />
      </div>
    </Fade>
  );
}

export default Hero;
