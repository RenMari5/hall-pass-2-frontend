import React from "react";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <div className="class-hours">
          <h2>1st Hour</h2>
        </div>
        <div className="class-hours">
          <h2>2nd Hour</h2>
        </div>
        <div className="class-hours">
          <h2>3rd Hour</h2>
        </div>
        <div className="class-hours">
          <h2>4th Hour</h2>
        </div>
        <div className="class-hours">
          <h2>5th Hour</h2>
        </div>
        <div className="class-hours">
          <h2>6th Hour</h2>
        </div>
        <div className="class-hours">
          <h2>7th Hour</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
