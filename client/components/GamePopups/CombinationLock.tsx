import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/lock.css'
import '../../styles/popup.css'
import unlock from '/audio/combination-lock.mp3'

interface Props {
  setLockNum: React.Dispatch<React.SetStateAction<boolean>>
  setVolume: React.Dispatch<React.SetStateAction<number>>
  timer: number
  jigsawWin: boolean
  setExit:React.Dispatch<React.SetStateAction<boolean>>
}

export default function CombinationLock({
  setLockNum,
  setVolume,
  timer,
  jigsawWin,
  setExit
}: Props) {
  const navigate = useNavigate()
  const [pin1, setPin1] = useState(0)
  const [pin2, setPin2] = useState(0)
  const [pin3, setPin3] = useState(0)
  const [pin4, setPin4] = useState(0)
  const sound = new Audio(unlock)

  function foyerMove(){
    sound.play()
    setVolume(0)
    navigate(`/Foyer/${timer}`)
  }

  function handleSubmit() {
    if (pin1 === 3 && pin2 === 5 && pin3 === 9 && pin4 === 0) {
      jigsawWin ? (
        foyerMove()
     ) : (
        setExit(true)
      )
    } else {
      console.log('Try Again')
      setExit(false)
    }
  }

  return (
    <>
      <div className="bg">
        <div className="box">
          <div id="pin">
            <button
              onClick={() => {
                setPin1(pin1 + 1)
                if (pin1 > 8) {
                  setPin1(0)
                }
              }}
            >
              ▲
            </button>
            <p id="number">{pin1}</p>
            <button
              onClick={() => {
                setPin1(pin1 - 1)
                if (pin1 < 1) {
                  setPin1(9)
                }
              }}
            >
              ▼
            </button>
          </div>
          <div id="pin">
            <button
              onClick={() => {
                setPin2(pin2 + 1)
                if (pin2 > 8) {
                  setPin2(0)
                }
              }}
            >
              ▲
            </button>
            <p id="number">{pin2}</p>
            <button
              onClick={() => {
                setPin2(pin2 - 1)
                if (pin2 < 1) {
                  setPin2(9)
                }
              }}
            >
              ▼
            </button>
          </div>
          <div id="pin">
            <button
              onClick={() => {
                setPin3(pin3 + 1)
                if (pin3 > 8) {
                  setPin3(0)
                }
              }}
            >
              ▲
            </button>
            <p id="number">{pin3}</p>
            <button
              onClick={() => {
                setPin3(pin3 - 1)
                if (pin3 < 1) {
                  setPin3(9)
                }
              }}
            >
              ▼
            </button>
          </div>
          <div id="pin">
            <button
              onClick={() => {
                setPin4(pin4 + 1)
                if (pin4 > 8) {
                  setPin4(0)
                }
              }}
            >
              ▲
            </button>
            <p id="number">{pin4}</p>
            <button
              onClick={() => {
                setPin4(pin4 - 1)
                if (pin4 < 1) {
                  setPin4(9)
                }
              }}
            >
              ▼
            </button>
          </div>
          <div className="submitdiv"></div>
          <br />
          <button className="submit" onClick={handleSubmit}>
            x
          </button>
        </div>
      </div>
      <p>You feel like you're missing something, check the room for more items</p>
      <button className="close" onClick={() => setLockNum(false)}>
        x
      </button>
    </>
  )
}
