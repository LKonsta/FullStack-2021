import React, { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {
    setGood(good+1)
  }

  const addNeutral = () => {
    setNeutral(neutral+1)
  }

  const addBad = () => {
    setBad(bad+1)
  }

  return (
    <div>
      <h1>give feedback</h1>

      <Button text="good" onClick={addGood}/>
      <Button text="neutral" onClick={addNeutral}/>
      <Button text="bad" onClick={addBad}/>

    <h2>statistic</h2>
    
    <Statistic 
      good={good}
      neutral={neutral}
      bad={bad}
      all={good + neutral + bad}
    />
      
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>

  )
}

const Statistic = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <p>No feedback given yet</p>
      </div>
      
    )
  } else {
    return (
      <table>
        <tbody>
          <StatiscticLine text="good" value={props.good} />
          <StatiscticLine text="neutral" value={props.neutral} />
          <StatiscticLine text="bad" value={props.bad} />
          <StatiscticLine text="all" value={props.all} />
          <StatiscticLine text="average" value={
            (props.good - props.bad)/props.all} 
          />
          <StatiscticLine text="positives" value={
            (props.good/props.all) * 100} precent="%"
          />
        </tbody>
      </table>
    )
  }
}

const StatiscticLine = (props) => {
  return (
    <tr>
      <td> {props.text} </td>
      <td> {props.value} </td>
      <td> {props.precent}</td>
    </tr>
  )
}

export default App