import Hours from "../../interface/class-hours.interface";
import ClassHour from "../class-hour/class-hour.component";

const Directory = (classes: Array<Hours>) => {
  return (
    <div className="class-hours">
      {
        (classHours = classes.map((hour: { id: number; title: string }) => {
          <ClassHour key={hour.id} hour={`${hour.title}`} />;
        }))
      }
      ;
    </div>
  );
};

export default Directory;
