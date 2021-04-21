import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}> {props.text} </button>
);

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const [selected, setSelected] = useState(0)
  const [allVotes, setAllVotes] = useState(Array(6).fill(0))
  const [votewinner, setVoteWinner] = useState(0)

  const handlewinner = () => {
    let maxAt = 0;
    for (let i = 0; i < allVotes.length; i++) {
        maxAt = allVotes[i] > allVotes[maxAt] ? i : maxAt;
      }
    setVoteWinner(maxAt);
  }
  const handleVoteClick = () => {
    const newAllVotes = [...allVotes]
    newAllVotes[selected] += 1
    setAllVotes(newAllVotes)
  }
  const setrandom = (randomvalue) => {
    setSelected(randomvalue);
  } 
  const clickboth = () => {
    handlewinner();
    handleVoteClick();
  }

  return (
    <div>
      <h4> {anecdotes[selected]} </h4> 
      has {allVotes[selected]} votes <br />
      <Button handleClick = {clickboth} text =  'vote' />
      <Button handleClick={() => setrandom(Math.floor(Math.random() * 6) + 0)} text = 'next anecdote' /> 
      <h3>Anecdotes with the most votes</h3>
      has {allVotes[votewinner]} votes <br />
      {anecdotes[votewinner]}
    </div>
  )
}

export default App
