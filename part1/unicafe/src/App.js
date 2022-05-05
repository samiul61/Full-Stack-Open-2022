import { useState } from 'react'


const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const TextH1 = ({text}) => <h1>{text}</h1>

const StatisticLine = ({lable, value, symbol}) => <tr><td>{lable}</td><td>{value}{symbol}</td></tr>

const Statistics = ({good, bad, neutral}) => {
  const all = good + bad + neutral
  const avg = (good - bad) / (good + bad + neutral)
  const positive = (good / all) * 100

  if (isNaN(avg)) {
    return "No feedback given."
  }

  return (
    <table>
      <tbody>
        <StatisticLine lable="Good:" value={good}/>
        <StatisticLine lable="Neutral:" value={neutral}/>
        <StatisticLine lable="Bad:" value={bad}/>
        <StatisticLine lable="All:" value={all}/>
        <StatisticLine lable="Average:" value={avg.toFixed(2)}/>
        <StatisticLine lable="Positive:" value={positive.toFixed(2)} symbol="%"/>
      </tbody>
    </table>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <TextH1 text='give feedback'/>
      <Button handleClick={() => setGood(good + 1)} text={"good"}/>
      <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"}/>
      <Button handleClick={() => setBad(bad + 1)} text={"bad"}/>
      <TextH1 text='statistics'/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App