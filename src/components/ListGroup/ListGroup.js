import React from "react";
import "../ListItem/ListItem.css";
import "./ListGroup.css";

export default function ListGroup(props) {
  return (
    <div className={`' list-group ' + ${props.columns}`}>
      <ol>{props.children}</ol>
    </div>
  );
}
