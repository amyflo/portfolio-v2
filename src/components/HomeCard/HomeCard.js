import React from "react";
import { Link } from "gatsby";
import Col from "react-bootstrap/Col";
import { Badge } from "react-bootstrap";
import "./homecard.css";

export default function HomeCard(props) {
  return (
    <Col className="home-card" xs={12} md={6}>
      <Link to={props.link}>
        <div className="header-image">
          {props.children}
        </div>
      </Link>
      <div>
        <h2 className="header-headline">
          <Link to={props.link}>{props.headline}</Link>&nbsp;&nbsp;&nbsp;
          <Badge className="small-badge" variant="light">{props.badge1}</Badge>&nbsp;
          <Badge className="small-badge" variant="light">{props.badge2}</Badge>
        </h2>
      </div>
      <p className="header-text">{props.text}</p>
    </Col>
  );
}
