import { HTMLAttributes } from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Label from "../../components/Label";
import "./styles.css";

interface LoginPageProps extends HTMLAttributes<HTMLDivElement> {}

function LoginPage({}: LoginPageProps) {
  return (
    <div className="pageContainer">
      <header>
        <h1 className="title">Save time & money with Spendfy</h1>
      </header>
      <div className="formContainer">
        <Form autoComplete="off">
          <Input placeholder="Name"></Input>
          <Input placeholder="Last name"></Input>
          <Input placeholder="E-mail address"></Input>
          <Input placeholder="Password"></Input>
          <Button text={"Login"}>Login</Button>
        </Form>
        <Label>
          By clicking the button, you are agreeing to our Terms and Services
        </Label>
      </div>
    </div>
  );
}

export default LoginPage;
