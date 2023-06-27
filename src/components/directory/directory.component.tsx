import ClassHours from '../class-hour/class-hour.component'

const Directory = ({classes}) => {
    return (
        <div className=''>
    {classHours = classes.map((hour) => {
      return {
        title: `${hour.title}`,
      };
    })};
    </div>
  }

export default Directory;
