import React from 'react';
import ReactDOM from 'react-dom';

const Course = (props) => {
  const coursearr = []
  for(let i = 0; i < props.course.length; i++) {
    coursearr.push(<Header course = {props.course[i]}/>)
    coursearr.push(<Content course = {props.course[i]}/>)
    coursearr.push(<Total course = {props.course[i]}/>)
  }
  return(
    <div>
      {coursearr}
    </div>
  )
}

const Header = ({ course }) => {
  return (
    <div>
      <h2>Web Development Curriculum</h2>
      <h3>{course.name}</h3>
    </div>
  )
}

const Total = ({ course }) => {
  const total = course.parts.reduce((sum, order) => 
    <p key = {order.id}> {sum+ order.exercises} </p>, 0 );
  return(
    <ul>{total}</ul>
  ) 
}

const Content = ({ course }) => {
  const contentarr = []
  for(let i = 0; i < course.parts.length; i++) {
    contentarr.push(<Part part = {course.parts[i]}/>)
  }
  return (
    <div>
      {contentarr}
    </div>
  )
}

const Part = ({ part }) => {
  return (
    <div>
      {part.name} {part.exercises}
    </div>    
  )
}

const App = () => {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))
export default App