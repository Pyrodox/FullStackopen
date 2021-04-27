import React from 'react'

const Course = (props) => {
  // const coursearr = []
  // for(let i = 0; i < props.course.length; i++) {
    // coursearr.push(<Header course = {props.course[i]}/>)
    // coursearr.push(<Content course = {props.course[i]}/>)
    // coursearr.push(<Total course = {props.course[i]}/>)
  // }
  const coursearr1 = props.course.map((courses) => <Header course = {courses} />)
  const coursearr2 = props.course.map((courses) => <Content course = {courses} />)
  const coursearr3 = props.course.map((courses) => <Total course = {courses} />)
  console.log(coursearr1)
  console.log(coursearr2)
  console.log(coursearr3)
  return(
    <div>
      {coursearr1}
      {coursearr2}
      {coursearr3}
    </div>
  )
}

const Header = ({ course }) => {
  return (
    <div>
      <h3>{course.name}</h3>
    </div>
  )
}

const Total = ({ course }) => {
  const total = course.parts.reduce((sum, order) => sum + order.exercises, 0 );
  return(
    <div><br/>total of {total} exercises</div>
  ) 
}

const Content = ({ course }) => {
  // const contentarr = []
  // for(let i = 0; i < course.parts.length; i++) {
    // contentarr.push(<Part part = {course.parts[i]}/>)
  // }
  const contentarr = course.map((courses) => courses.parts)
  return (
    <div>
      <Part part = {contentarr} />
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

export default Course