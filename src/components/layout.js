import React from "react";
import { Link } from "gatsby";
import * as containerStyles from "./layout.module.css";
import Fade from "react-reveal/Fade";

const ListLink = (props) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default function Layout({ children }) {
  return (
    <div className={containerStyles.container}>
      <Fade bottom>
        <nav style={{ marginBottom: `4rem` }}>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h3 style={{ display: `inline` }}>Amy Lo</h3>
          </Link>
          <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
            <li style={{ display: `inline-block`, marginRight: `1rem` }}>
              <a href="https://drive.google.com/file/d/1CD1GWTzZ6b_Zwb32NyKanRC961dAwN83/view?usp=sharing">
                Resume
              </a>
            </li>
          </ul>
        </nav>
        {children}
      </Fade>
    </div>
  );
}
