import { useState } from 'react'
import './App.css'
import { guess, startGame, restart } from './axios'
function App() {
  // Define states
  const [hasStarted, setHasStarted] = useState(false)
  const [hasWon, setHasWon] = useState(false)
  const [number, setNumber] = useState('')
  const [status, setStatus] = useState('')

  const handleGuess = async () => {
    const response = await guess(number)

    if (response === 'Equal') setHasWon(true)
    else {
      setStatus(response)
      setNumber('')
    }
  }

  // Define three different views
  const startMenu = (
    <div>
      <button onClick = {
        // someFunctionToBackend; and setHasStarted
        async () => {
          await startGame () ;
          setHasStarted(true) ;
        }
      } > start game </button> 
    </div>
  )
  const gameMode = (
    <>
      <p>Guess a number between 1 to 100</p>
      <input value = {number} onInput={e => setNumber(e.target.value)}   // Get the value from input
      />
      <button  // Send number to backend
        onClick={handleGuess}
        disabled={!number}
      >guess!</button>
      <p>{status}</p>
    </>
  )

  const winningMode = (
    <>
      <p>you won! the number was {number}.</p>
      <button  
        onClick = {
          // Handle restart for backend and frontend
          async () => {
          await restart ();
          setHasWon(false);
          setNumber('');
        }
      }
      >restart</button>
    </>
  )

  

  const game = (
    <div>
      {hasWon ? winningMode : gameMode}   
    </div>
  )

  return  (
    <div className="App">    
      {hasStarted ? game : startMenu}
    </div>
  )
}
export default App
