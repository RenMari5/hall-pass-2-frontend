const ClassHour = ({ hour }) => {
  const { title } = hour;
  return (
    <div className="class-hours-container">
      <div className="class-hours">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default ClassHour;
