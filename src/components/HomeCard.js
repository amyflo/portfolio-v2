import React from "react";
import { Link } from "gatsby";
import Card from "react-bootstrap/Card";

export default function HomeCard(props) {
  return (
    <Link to={props.link}>
      <Card>
        {props.children}
        <Card.Body>
          <h4><strong>{props.headline}</strong></h4>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}
