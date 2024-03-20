import { useState } from "react";

const Statistics = (props) => {
  if (props.value === 0) {
    <p>Click the buttons to give feedback</p>;
  } else {
    return (
      <div>
        {props.name}: {props.value}
      </div>
    );
  }
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    const updatedAll = updatedGood + neutral + bad;
    setAll(updatedAll);
    setAverage(updatedAll / 3);
    const positive = updatedGood / updatedAll;
    setPositive(positive * 100);
  };
  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    const updatedAll = good + updatedNeutral + bad;
    setAll(updatedAll);
    setAverage(updatedAll / 3);
    const positive = good / updatedAll;
    setPositive(positive * 100);
  };
  const handleBadClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    const updatedAll = good + neutral + updatedBad;
    setAll(updatedAll);
    setAverage(updatedAll / 3);
    const positive = good / updatedAll;
    setPositive(positive * 100);
  };

  return (
    <>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />

      {/* <button onClick={() => setGood(good + 1)}>Good</button> */}
      {/* <button onClick={() => setNeutral(neutral + 1)}>Neutral</button> */}
      {/* <button onClick={() => setBad(bad + 1)}>Bad</button> */}

      <h2>Statistics</h2>
      <div>
        <Statistics name="Good" value={good} />
        <Statistics name="Neutral" value={neutral} />
        <Statistics name="Bad" value={bad} />
        <Statistics name="All" value={all} />
        <Statistics name="Average" value={average} />
        <Statistics name="Positive" value={positive + "%"} />
      </div>
    </>
  );
};

export default App;
