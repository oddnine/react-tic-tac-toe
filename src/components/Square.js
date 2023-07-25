import React from "react";
import '../styles/style.css';

const Square = (props) => (
  <button className="square" onClick={props.onClick}>
    {props.value}
  </button>
);

export default Square;
