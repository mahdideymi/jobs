import React from "react";
import "./InputBox.scss";

interface InputBoxProps {
  label?: string | "";
  placeholder?: string | "";
  type?: string | "";
  value?: string | "";
}

export const InputBox = (props: InputBoxProps) => (
  <input
    className="inputBox--input"
    placeholder={props.placeholder}
    value={props.value}
    type={props.type}
  />
);