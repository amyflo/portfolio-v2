import React from "react";
import "./ListItem.css";
import "../ListGroup/ListGroup.css"

export default function ListItem(props) {
  return (
    <a className="no-underline" href={props.href}>
      <div className="list-item">
        <li className={props.variant}>{props.text}</li>
      </div>
    </a>
  );
}
