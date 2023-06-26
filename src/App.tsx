import React from "react";
import logo from "./assets/logo.png";
import "./App.scss";
// import ClassHours from "./components/class-hours/class-hours.component";

const App = () => {
  // const classes = [
  //   {
  //     id: 1,
  //     title: "1st Hour",
  //   },
  //   {
  //     id: 2,
  //     title: "2nd Hour",
  //   },
  //   {
  //     id: 3,
  //     title: "3rd Hour",
  //   },
  //   {
  //     id: 4,
  //     title: "4th Hour",
  //   },
  //   {
  //     id: 5,
  //     title: "5th Hour",
  //   },
  //   {
  //     id: 6,
  //     title: "6th Hour",
  //   },
  //   {
  //     id: 7,
  //     title: "7th Hour",
  //   },
  // ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="class-hours-container">
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
};

export default App;
