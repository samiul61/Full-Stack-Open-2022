import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const MaxVote = ({anecdotes, votes}) => {
  const arr = Object.values(votes)
  const max = Math.max(...arr)
  const index = arr.indexOf(max)
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      {anecdotes[index]}
      <br/>
      has {votes[index]} votes
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const arrayNum = {}
  for (let i = 0; i < anecdotes.length; i++) {
    arrayNum[i] = 0
  }

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(arrayNum)


  const votesUpdate = () => {
    const updatedVoteState = {...votes}
    updatedVoteState[selected] ++
    setVotes(updatedVoteState)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}. 
      <br/>
      has {votes[selected]} votes
      <br/>
      <Button handleClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text={"next anecdote"}/>
      <Button handleClick={votesUpdate} text={"vote"}/>
      
      <MaxVote anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App
