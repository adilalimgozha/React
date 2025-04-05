import { useState, useEffect } from "react"

function App() {

  const [timer, setTimer] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [interv, setInterv] = useState()

  useEffect(() => {
    if (isRunning) {
      const tempInterv = setInterval(() => {
        setTimer(timer => timer + 1)
      }, 1000)

      setInterv(tempInterv)
    }
  }, [isRunning])

  
  function startTimer() {
    setIsRunning(true)
  }

  function stopTimer() {
    setIsRunning(false)
    clearInterval(interv)
  }

  function resetTimer() {
    setTimer(0)
    setIsRunning(false)
    clearInterval(interv)
  }

  let word

 if (isRunning== false && timer == 0){
    word = <button onClick={startTimer}>Start</button>
  }else if (isRunning== false && timer > 0){
    word = <button onClick={startTimer}>Continue</button>
  }else{
    word = <button onClick={stopTimer}>Stop</button>
  }


  return (
    <>
      <h2>{timer}</h2>
      {word}
      <button onClick={resetTimer}>Reset</button>
    </>
  )
}

export default App