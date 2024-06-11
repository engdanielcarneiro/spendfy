import { HTMLAttributes } from "react";
import "./styles.css";

interface FormProps extends HTMLAttributes<HTMLFormElement> {
  autoComplete: string;
}

function Form({ autoComplete, children }: FormProps) {
  return <form autoComplete={autoComplete}>{children}</form>;
}

export default Form;
