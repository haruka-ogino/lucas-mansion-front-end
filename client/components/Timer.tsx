import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import EndPage from './EndPage'

export default function Timer() {
  const location = useLocation()
  const [timer, setTimer] = useState(0)

  const dinnerTimer = setTimeout(() => {
    if (location.pathname !== '/') {
      setTimer(1 + timer)
      // console.log(timer)
    }
  }, 1000)
  if (location.pathname === '/end-page') {
    clearInterval(dinnerTimer)
  }

  return <>{location.pathname === '/end-page' && <EndPage timer={timer} />}</>
}
