const Hearder = ({course}) => <p>{course}</p>;

const Part = ({part, exercise}) => <p>{part} {exercise}</p>;

const Content = ({parts}) => {
  return (
    <>
        <Part part={parts[0].name}/>
        <Part part={parts[1].name}/>
        <Part part={parts[2].name}/>
    </>
  );
};


const Total = ({num}) => {
  let total = 0;
  num.forEach(element => {total += element.exercises});
  return (<p>The total is {total}.</p>);
};

  
const App = () => {
  const course = {
    name: "Half Stack application development.",
    parts: [
      {
        name: "Fundamentals of React.",
        exercises: 10,
      },
      {
        name: "Using props to pass data.",
        exercises: 7,
      },
      {
        name: "State of a component.",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Hearder course={course.name}/>
      <Content parts={course.parts}/>
      <Total num={course.parts}/>
    </div>
  );
};
  
export default App;