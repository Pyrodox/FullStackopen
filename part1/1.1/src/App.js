import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) => {
    return (
      <div>
        <p>{props.course}</p>
      </div>
    )
  }

  const Content = (props) => {
    const Partone = (props2) => {
      return (
        <div>
          <p>{props2.parto}: {props2.ex1}</p>
        </div>
      )
    }
    const Parttwo = (props2) => {
      return (
        <div>
          <p>{props2.parttw}: {props2.ex2}</p>
        </div>
      )
    }
    const Partthree = (props2) => {
      return (
        <div>
          <p>{props2.partth}: {props2.ex3}</p>
        </div>
      )
    }
    return (
      <div>
        <Partone parto = {part1} ex1 = {exercises1}/>
        <Parttwo parttw = {part2} ex2 = {exercises2}/>
        <Partthree partth = {part3} ex3 = {exercises3}/>
      </div>
    )
  }

  const Total = (props) => {
    return (
      <div>
        <p>{props.total}</p>
      </div>
    )
  }

  return (
    <div>
      <Header course = {course} />
      <Content />
      <Total total = {part1 + part2 + part3} />
    </div>
  )
}

export default App