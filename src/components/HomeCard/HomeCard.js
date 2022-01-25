import React from "react";
import { Link } from "gatsby";
import Col from "react-bootstrap/Col";
import "./homecard.css";

export default function HomeCard(props) {
  return (
    <Col
      className="home-card"
      xs={12}
      sm={12}
      md={props.md}
    >
      <Link to={props.link}>
        <div>
          {props.children}
          <h3
            className="cardcopy underline"
            style={{ padding: "10px 0px", margin: "0px" }}
          >
            {props.headline}
          </h3>
        </div>
      </Link>
      <p className="cardcopy" style={{ padding: "0px", margin: "0px" }}>
        {props.text}
      </p>
    </Col>
  );
}
