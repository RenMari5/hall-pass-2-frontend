import Hours from "../../interface/class-hours.interface";
import ClassHour from "../class-hour/class-hour.component";

const Directory = (classes: Hours) => {
  return (
    <div className="class-hours">
      {
        (classHours = classes.map((hour: { title: string }) => {
          <ClassHour key={hour.id} hour={`${hour.title}`} />;
        }))
      }
      ;
    </div>
  );
};

export default Directory;
