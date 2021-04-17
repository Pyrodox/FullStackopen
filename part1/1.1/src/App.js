import React, { useState } from 'react'

const Statistics = (props) => (
  <div>
  all: {props.good + props.neutral + props.bad} <br/>
  average:  {(props.good + props.bad * -1) / (props.good + props.neutral + props.bad)} <br/>
  positive: {(props.good / (props.good + props.neutral + props.bad)) * 100} %
  </div>
)

const Button = (props) => (
  <button onClick = {props.handleClick}>
    {props.text}
  </button>
)

const ifshow = (props) => {
  if(props.good == 1 && props.neutral == 1 && props.bad == 1)
    console.log("h");
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToValueG = newValue => {
    setGood(newValue)
  }

  const setToValueN = newValue => {
    setNeutral(newValue)
  }

  const setToValueB = newValue => {
    setBad(newValue)
  }

  

  return (
    <div>
      <Button handleClick = {() => setToValueG(good + 1)} text = 'good'/>
      {" " + good + " "}
      <Button handleClick = {() => setToValueN(neutral + 1)} text = 'neutral'/>
      {" " + neutral + " "}
      <Button handleClick = {() => setToValueB(bad + 1)} text = 'bad'/>
      {" " + bad + " "} <br/>
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
      <br/> 
      <ifshow good = {good} neutral = {neutral} bad = {bad} />
      </div>
  )
}

export default App
