import React from "react";
import Navigation from "./Navigation"
import Fade from "react-reveal/Fade";
import "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <Fade bottom>
        {children}
      </Fade>
    </div>
  );
}
