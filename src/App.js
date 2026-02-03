import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About/index.jsx";
import Nav from "./components/Nav/index.jsx";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
