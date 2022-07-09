import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const headtext = 'Give Feedback'
  const statline = 'Statistics'
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  return (
    <div>
    
      <Header headtext={headtext}/>
      
      <button onClick={() => setGood(good + 1)}>
        Good
      </button>

      <button onClick={() => setNeutral(neutral + 1)}>
        Neutral
      </button>

      <button onClick={() => setBad(bad + 1)}>
        Bad
      </button>

      <StatText statline={statline} />
      <Statistics g_count={good} n_count={neutral} b_count={bad} Statistics
       full_count={good + neutral + bad} 
       average_count={((good*[1])+(neutral*[0])+(bad*[-1]))/(good + bad + neutral)} 
       positive_count={(100*good)/(good+bad+neutral)}
       />
    
    </div>
  )
}


const Header = (props) => {
  return (
    <div>
      <h1>
        {props.headtext}
      </h1>
    </div>
  )
}

const StatText = (props) => {
  return(
    <div>
      <h1>
        {props.statline}
      </h1>
    </div>
  )
}


const Statistics = (props) => {
  return(
    <div>
      <h3> Good: {props.g_count}</h3>
      <h3> Neutral: {props.n_count}</h3>
      <h3> Bad: {props.b_count}</h3>
      <h3> All: {props.full_count}</h3>
      <h3> Average: {props.average_count}</h3>
      <h3> Positive: {props.positive_count} %</h3>

    </div>
  )
}

export default App