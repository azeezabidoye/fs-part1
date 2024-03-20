const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        {props.part} {props.exercise}
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises: {props.exercise}</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: `Half Stack application development`,
    parts: [
      {
        name: `Fundamentals of React`,
        exercises: 10,
      },
      {
        name: `Using props to pass data`,
        exercises: 7,
      },
      {
        name: `State of a component`,
        exercises: 7,
      },
    ],
  };
  // const part1 = "Fundamentals of React";
  // const exercises1 = 10;
  // const part2 = "Using props to pass data";
  // const exercises2 = 7;
  // const part3 = "State of a component";
  // const exercises3 = 14;

  return (
    <>
      <Header course={course.name} />

      <Content
        part={course.parts[0].name}
        exercise={course.parts[0].exercises}
      />

      <Total exercise={course.parts} />
    </>
  );
};

export default App;
