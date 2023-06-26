import ClassHours from "../class-hours/class-hours.component";
import "../directory/directory.styles.scss";

const Directory = ({ classes }) => {
  return (
    <div className="class-hours">
      {classes.map((class) => (
        <ClassHours key={classes.id} classHour={classes.title} />
      ))}
    </div>
  );
};

export default Directory;
