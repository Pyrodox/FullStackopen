import React from 'react'
import { nanoid } from 'nanoid';
import Note from './components/Note'

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => <Note key = {nanoid()} note = {note} /> )}
      </ul>
    </div>
  )
}

console.log("App works...");

export default App