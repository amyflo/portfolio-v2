import React from "react";
import Button from "../Button/Button";
import "./PageEnd.css";

export default function PageEnd(props) {
  return (
    <div className="page-end">
      <h4>{props.headline}</h4>
      <Button text={props.text} href={props.href} variant="dark" />
    </div>
  );
}
