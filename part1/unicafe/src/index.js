import React, { useState } from "react";
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = (props) => {
  let good = props.good
  let neutral = props.neutral
  let bad = props.bad
  return(
    <div>
      <Statistic text = "good" value = {good} />
      <Statistic text = "neutral" value = {neutral} />
      <Statistic text = "bad" value = {bad} />
      <Statistic text = "all" value = {good + neutral + bad} />
      <Statistic text = "average" value = {(good + bad * -1) / (good + neutral + bad)} />
      <Statistic text = "positive" value = {(good / (good + neutral + bad)) * 100 + "%"} />
    </div>
  )
}

const Statistic = (props) => {
  return(
    <tr>
      <td> {props.text}&nbsp; </td> <td> {props.value} </td>
    </tr> 
  )
}

const Ifshow = (props) => {
  if (props.good !== 0 || props.neutral !== 0 || props.bad !== 0)
    return(
      <div>
        <Statistics good = {props.good} neutral = {props.neutral} bad = {props.bad} />
      </div>)
  else 
    return(<p>No feedback given</p>)
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToValueG = (newValue) => {
    setGood(newValue);
  };

  const setToValueN = (newValue) => {
    setNeutral(newValue);
  };

  const setToValueB = (newValue) => {
    setBad(newValue);
  };

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => setToValueG(good + 1)} text="good" />
      <Button handleClick={() => setToValueN(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToValueB(bad + 1)} text="bad" />
      <br />
      <h2> statistics </h2>
      <Ifshow good = {good} neutral = {neutral} bad = {bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'))
export default App;