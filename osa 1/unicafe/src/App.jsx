import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button text="good" handleClick={handleGoodClick} />
      <Button text="neutral" handleClick={handleNeutralClick} />
      <Button text="bad" handleClick={handleBadClick} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const count = good + neutral + bad
  const average = (good + 0 * neutral + bad * -1) / count
  const positive = good / count * 100
  
  if (count == 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
       <h2>statistics</h2>
       <ul>
        <li><StatisticLine text="good" value={good} /></li>
        <li><StatisticLine text="neutral" value={neutral} /></li>
        <li><StatisticLine text="bad" value={bad} /></li>
        <li><StatisticLine text="all" value={count} /></li>
        <li><StatisticLine text="average" value={average} /></li>
        <li><StatisticLine text="positive" value={positive} /></li>
      </ul>
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <div>
      {text} {value}
    </div>
  )
}

export default App