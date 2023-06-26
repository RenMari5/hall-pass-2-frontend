import "./App.scss";
import ClassHours from "./components/class-hours/class-hours.component";

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

  return (
    <div className="class-hours-container">
      <div className="class-hours">
        {classes.map((hour) => (
          <ClassHours key={hour.id} title={hour.title} />
        ))}
      </div>
    </div>
  );
};

export default App;
