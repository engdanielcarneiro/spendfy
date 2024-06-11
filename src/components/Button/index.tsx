import { HTMLAttributes } from "react";
import "./styles.css";
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
}

function Button({ text }: ButtonProps) {
  return <button>{text}</button>;
}

export default Button;
