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
      <Display name='Good:' count={good}/>
      <Display name='Neutral:' count={neutral}/>
      <Display name='Bad:' count={bad}/>
    
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

const Display = (props) => {
  return (
    <div>
      <h3> {props.name} {props.count}</h3>
    </div>
  )
}

export default App