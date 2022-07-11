import { useState } from 'react'

const App = () => {
  const anecdotes = Array(
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  )
  
  const [selected, setSelected] = useState(0)
  
  return (
    <div>
      <AnLine selected={anecdotes[selected]}/>
      <Button set={setSelected} selected={selected}>Next anecdote</Button>
    </div>
  )
}

const Button = (props) =>{
  return(
    <div>
      <button onClick={()=>{props.set(Math.floor(Math.random() * 6))}}>Next anecdote</button>
    </div>
  )
}

const AnLine = (props) =>{
  return(
    <div>
      {props.selected}
    </div>
  )
}
export default App