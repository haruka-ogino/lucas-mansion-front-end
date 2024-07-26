import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/lock.css'
import '../../styles/popup.css'

//audio
import unlock from '/audio/combination-lock.mp3'
import shuffle from '/audio/shuffle.mp3'

interface Props {
  setLockNum: React.Dispatch<React.SetStateAction<boolean>>
  setVolume: React.Dispatch<React.SetStateAction<number>>
  timer: number
  jigsawWin: boolean
  setExit: React.Dispatch<React.SetStateAction<boolean>>
  setStopper: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CombinationLock({
  setLockNum,
  setVolume,
  jigsawWin,
  setExit,
  setStopper,
}: Props) {
  const navigate = useNavigate()
  const [pin1, setPin1] = useState(0)
  const [pin2, setPin2] = useState(0)
  const [pin3, setPin3] = useState(0)
  const [pin4, setPin4] = useState(0)
  const sound = new Audio(unlock)

  function foyerMove() {
    sound.play()
    setVolume(0)
    navigate(`/Foyer`)
  }

  function stopLock() {
    setExit(true)
    setLockNum(false)
    setStopper(true)
  }

  function handleSubmit() {
    if (pin1 === 3 && pin2 === 5 && pin3 === 9 && pin4 === 0) {
      jigsawWin ? foyerMove() : stopLock()
    } else {
      // console.log('Try Again')
      setExit(false)
    }
  }

  const shuffleSound = new Audio(shuffle)

  return (
    <>
      <div className="bg">
        <div className="box">
          <div id="pin">
            <button
              onClick={() => {
                shuffleSound.play(), setPin1(pin1 + 1)
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
                shuffleSound.play(), setPin1(pin1 - 1)
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
                shuffleSound.play(), setPin2(pin2 + 1)
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
                shuffleSound.play(), setPin2(pin2 - 1)
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
                shuffleSound.play(), setPin3(pin3 + 1)
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
                shuffleSound.play(), setPin3(pin3 - 1)
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
                shuffleSound.play(), setPin4(pin4 + 1)
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
                shuffleSound.play(), setPin4(pin4 - 1)
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
      <button className="close" onClick={() => setLockNum(false)}>
        x
      </button>
    </>
  )
}
