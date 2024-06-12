import { Link, useRouteError } from "react-router-dom";
import "./styles.css";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.log(error);
  return (
    <div className="error-page">
      <div className="content-area-error">
        <h1 className="title-error">Oops!</h1>
        <p className="p-error">Sorry, an unexpected error has occurred.</p>
        <p className="p-error">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to={"/"}>Go back home</Link>
      </div>
    </div>
  );
}
