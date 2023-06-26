import "../class-hours/class-hours.styles.scss";

const ClassHours = ({ class: string }) => {
  const {title: string} = class;   
  return (
    <div className="class-hours-container">
      <div className="class-hours">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default ClassHours;
