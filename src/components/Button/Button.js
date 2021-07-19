import React from "react";
import "./button.css";

export default function Button(props) {
  return (
    <button type="button" className={props.variant}>
      <a className={props.variant} href={props.href}>{props.text}</a>
    </button>
  );
}
