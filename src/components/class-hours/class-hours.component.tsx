import "../class-hours/class-hours.styles.scss";
import ClassProps from "../../types/class.types";
import { title } from "process";

const ClassHours = () => {
  return (
    <div className="class-hours-container">
      <div className="class-hours">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default ClassHours;
