import { useState } from 'react'
// import './App.css'
import Lottery from './Components/Lottery'
import { sum } from './js/Lottery'

function App() {
  const [count, setCount] = useState(0)

  let winningSum = (arr) => {
    return sum(arr) === 15;
    // return arr.every((num) => num ===arr[0]);  
  };
  return (
    <>
      <marquee style={{color:"white",fontSize:"1.3rem"}} behavior="alternate" bgcolor="red" width="100%">Winning condition : your ticket digit's sum must be equal to 15 </marquee>
      <Lottery n={3} winCondition={winningSum} />
    </>
  )
}

export default App
