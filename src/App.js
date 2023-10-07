//import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container my-30 mx-30"></div>
      <About />
    </>
  );
}

export default App;
