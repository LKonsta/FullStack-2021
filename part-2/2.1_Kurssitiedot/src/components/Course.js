import React from 'react'

const Course = (props) => {
    return (
      
      <div>
        <h1>Web development curriculum</h1>
       
          {props.course.map(courses =>
          <div key={courses.id}>
            <Header name={courses.name}/>
            <Content cont={courses.parts}/>
            <Total cont={courses.parts}/>
          </div>
          )}
        
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
        <ul>
          {props.cont.map(part => 
          <li key={part.id}>            
            <Part cont={part}/>  
          </li>         
          )}
        </ul>
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
    const exerciseArray = props.cont.map(e => e.exercises)
    const total = exerciseArray.reduce(( ini, cV ) => ini + cV)
    return (
      <div>
        <p><b>Total of {total} exercises</b></p>
      </div>
    )
  }

export default Course