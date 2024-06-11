import { HTMLAttributes } from "react";
import "./styles.css";
interface InputProps extends HTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

function Input({ placeholder }: InputProps) {
  return <input placeholder={placeholder}></input>;
}

export default Input;
