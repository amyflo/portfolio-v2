import React from "react";
import { Link } from "gatsby";

const ListLink = (props) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

function Navigation() {
  return (
    <nav>
      <div className="container">
        <Link to="/">
          <h4 style={{ display: `inline`, padding: "0px 3px" }}>Amy Lo</h4>
        </Link>
        <ul style={{ listStyle: `none`, float: `right`, padding: "7px" }}>
          <ListLink to="/">Home</ListLink>
          {/* <ListLink to="/gallery">Gallery</ListLink> */}
          
          <ListLink to="/about">About</ListLink>
          <li style={{ display: `inline-block` }}>
            <a href="https://drive.google.com/file/d/1CD1GWTzZ6b_Zwb32NyKanRC961dAwN83/view?usp=sharing">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
