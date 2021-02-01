import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header 
        name={course.name} 
      />
      
      <Content 
        cont={course.parts}
      />

      <Total 
        cont={course.parts}
      />
      
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part cont={props.cont[0]}/>
      <Part cont={props.cont[1]}/>
      <Part cont={props.cont[2]}/>
    </div>
  
  )
}

const Part = (props) => {
  return (
    <div>
      <p> {props.cont.name} {props.cont.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {
        props.cont[0].exercises+
        props.cont[1].exercises+
        props.cont[2].exercises}
      </p>
    </div>
  )
}

export default App