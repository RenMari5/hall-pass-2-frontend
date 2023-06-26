import React from "react";
import logo from "./assets/logo.png";
import "./App.scss";
import ClassHours from "./components/class-hours.component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ClassHours />
    </div>
  );
}

export default App;
