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
    <Fade className={containerStyles.container} bottom>
      <nav style={{ marginBottom: `4rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>Amy Lo</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
        </ul>
      </nav>
      {children}
    </Fade>
  );
}
