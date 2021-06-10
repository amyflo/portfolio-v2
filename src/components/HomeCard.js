import React from "react";
import { Link } from "gatsby";
import Col from "react-bootstrap/Col";

export default function HomeCard(props) {
  return (
    <Col
      className="home-container container"
      style={{ margin: "30px auto" }}
      xs={12}
      md={6}
    >
      <Link to={props.link}>
        <div className="card-container">
          {props.children}
          <h3 className="cardcopy" style={{ padding: "10px 0px" }}>
            {props.headline}
          </h3>
        </div>
      </Link>
      <p className="cardcopy" style={{ padding: "0px" }}>
        {props.text}
      </p>
    </Col>
  );
}
