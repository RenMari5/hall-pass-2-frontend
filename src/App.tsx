import React from "react";
import logo from "./assets/logo.png";
import "./App.scss";
import ClassHours from "./components/class-hours/class-hours.component";
import Directory from "./components/directory/directory.component";

const App = () => {
  const classes = [
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

  return <Directory />;
};

export default App;
