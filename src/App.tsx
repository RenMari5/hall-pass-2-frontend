import React from "react";
import logo from "./assets/logo.png";
import "./App.scss";
import Hours from "./interface/class-hours.interface";
import Directory from "./components/directory/directory.component";

const App = () => {
  const classes: Hours[] = [
    {
      id: 1,
      title: "1st Hour",
    },
    {
      id: 2,
      title: "2nd Hour",
    },
    {
      id: 3,
      title: "3rd Hour",
    },
    {
      id: 4,
      title: "4th Hour",
    },
    {
      id: 5,
      title: "5th Hour",
    },
    {
      id: 6,
      title: "6th Hour",
    },
    {
      id: 7,
      title: "7th Hour",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Directory classes={classes} />
    </div>
  );
};

export default App;
