import "./App.css";

function App() {
  return (
    <div className="page">
      <header>
        <h1 className="title">Save time & money with Spendfy</h1>
      </header>
      <div className="formContainer">
        <form className="form" autoComplete="off">
          <input className="formControl" placeholder="Name"></input>
          <input className="formControl" placeholder="Last name"></input>
          <input className="formControl" placeholder="E-mail address"></input>
          <input className="formControl" placeholder="Password"></input>
          <button className="formButton">Login</button>
        </form>
        <span className="labelContainer">
          <label className="label">
            By clicking the button, you are agreeing to our Terms and Services
          </label>
        </span>
      </div>
    </div>
  );
}

export default App;
