import React from "react";
import "./index.scss";

const Button = ({ children, type }) => {
  return <button className={`basic-style ${type}`}>{children}</button>;
};

export default Button;
