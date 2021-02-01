import React, { useState } from 'react'

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

  const [points, setVote] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))

  const [best, setBest] = useState(0)

  const Button = (props) => {
    return (
      <button onClick={props.onClick}>
        {props.text}
      </button>
    )
  }

  const randomAnecdote = () => {

    var num = selected
    var newNum = selected
    while (newNum === num)
      newNum = Math.round(Math.random() * (anecdotes.length-1))
    setSelected(newNum)
    // console.log(selected + "/" + points ) 
  }

  const voteAnecdote = () => {
    const copy = [...points]
    copy[selected] += 1
    setVote(copy)
    setBest(copy.indexOf(Math.max(...copy)))
  }

  const AnecdoteDisplay = (props) => {
    return (
      <div>
        {anecdotes[props.value]}
        <p>has {points[props.value]} votes</p>
      </div>
    )
    
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>

      <AnecdoteDisplay value={selected}/>

      <Button onClick={voteAnecdote} text="vote"/>
      <Button onClick={randomAnecdote} text="next anecdote"/>

      <h2>Anecdote that has most votes</h2>

      <AnecdoteDisplay value = {best}/>
    </div>
  )
}

export default App