import { HTMLAttributes } from "react";
import "./styles.css";

interface LabelProps extends HTMLAttributes<HTMLLabelElement> {}

function Label({ children }: LabelProps) {
  return (
    <span className="labelContainer">
      <label>{children}</label>
    </span>
  );
}

export default Label;
