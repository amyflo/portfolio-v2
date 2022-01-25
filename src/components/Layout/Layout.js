import React from "react";
import Navigation from "../Navigation/Navigation";
import Fade from "react-reveal/Fade";
import "./layout.module.css";
import Container from "react-bootstrap/Container";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
        <Fade>
          {children}
        </Fade>
      <Footer />
    </div>
  );
}
