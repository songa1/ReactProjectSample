import React, { useState } from 'react'
import './App.css';
import Nav from './Components/Navigation/Nav';

function App() {
  const [num, setNum] = useState(5)

  const minus = () => {
    const newNum = num - 1;
    setNum(newNum)
  }

  const plus = () => {
    const newNum = num + 1;
    setNum(newNum)
  }

  return (
    <>
      <Nav />
      <div className='counter'>
        <button onClick={minus}>-</button>
        <p>{num}</p>
        <button onClick={plus}>+</button>
      </div>
    </>
  )
}

export default App
