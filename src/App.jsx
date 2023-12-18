import { useEffect, useState } from "react"


function App() {
    const [seconds, setSeconds] = useState(57)
    const [minutes, setMinutes] = useState(59)
    const [hours, setHours] = useState(23)
    const [start, setStart] = useState(false)
    

    const handleReset = () => {
      setStart(false)
      setSeconds(0)
      setMinutes(0)
      setHours(0)
    }

    useEffect(() => {
      let intervalS;
      if(start){
        intervalS = setInterval(() => {
          setSeconds(s => (s>=59)? 0 :(s + 1))
          if (minutes === 59 && seconds === 59){
            setMinutes(0)
            setHours(h => h + 1)
          }if (seconds === 59 && minutes < 59){
            setMinutes(m => m+1)
          }
          if(hours === 23 && minutes === 59 && seconds === 59){
            setHours(0)
          }
        }, 1000)
        
      }
      return () => clearInterval(intervalS)
    }, [start, seconds, setSeconds, hours, setHours])

    return (
      <div className=" text-center mx-auto w-fit space-x-4 space-y-4  mt-20 border p-4 border-gray-400 rounded-lg">
        <h1 className=" text-4xl">{hours > 9 ?  hours : `0${hours}`}:{minutes> 9 ? minutes : `0${minutes}`}:{seconds>9 ? seconds : `0${seconds}`}</h1>
        <button className=" bg-green-700 text-white p-2 rounded-lg hover:bg-green-500" onClick={() => setStart(true)}>Start</button>
        <button className=" bg-red-700 text-white p-2 rounded-lg hover:bg-red-500" onClick={() => handleReset()}>Reset</button>
        <button className=" bg-yellow-700 text-white p-2 rounded-lg hover:bg-yellow-500" onClick={() => {setStart(false)}}>Stop</button>
      </div>
    )
}

export default App
