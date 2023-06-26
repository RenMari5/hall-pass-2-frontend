import "../components/class-hours.styles.scss";

function ClassHours() {
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
        <h2>{classes.title}</h2>
      </div>
    </div>
  );
}

export default ClassHours;
