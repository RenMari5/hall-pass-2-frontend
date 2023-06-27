import ClassHour from "../class-hour/class-hour.component";

const Directory = ({ classes }) => {
  return (
    <div className="">
      {
        (classHours = classes.map((hour: { title: string }) => {
          return {
            title: `${hour.title}`,
          };
        }))
      }
      ;
    </div>
  );
};

export default Directory;
