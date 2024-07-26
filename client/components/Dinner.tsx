/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useState } from 'react'

//intro:
import Intro from './GamePopups/Intro'

//audio:
import quack from '/audio/quack.mp3'
import jingle from '/audio/chandelier.mp3'
import pumpkins from '/audio/pumpkin.mp3'
import gnomed from '/audio/gnome.mp3'
import treasure from '/audio/chest.mp3'
import chair from '/audio/chair.mp3'
import dish from '/audio/dish.mp3'
import zipper from '/audio/zipper.mp3'
import locked from '/audio/cabinet-shake.mp3'

//games:
import Jigsaw from './GamePopups/Jigsaw'
import Matching from './GamePopups/Matching'
import MatchingExample from './GamePopups/MatchingExample'
import Clock from './GamePopups/Clock'
import CombinationLock from './GamePopups/CombinationLock'

//clues:
import ClockFace from './CluePopups/ClockFace'
import Gnome from './CluePopups/Gnome'
import Stool from './CluePopups/Stool'
import Chest from './CluePopups/Chest'
import Duck from './CluePopups/Duck'
import Mirror from './CluePopups/Mirror'
import Pumpkin from './CluePopups/Pumpkin'
import Chandelier from './CluePopups/Chandelier'
import Inventory from './CluePopups/Inventory'

//style:
import '../styles/popup.css'
import '../styles/dinner.css'
import { useNavigate } from 'react-router-dom'
import Stopper from './CluePopups/Stopper'
import { useLeaderboard } from '../hooks/useLeaderboard'

export default function Dinner() {
  const [block, setBlock] = useState(true)

  //game popups:
  const [jigsaw, setJigsaw] = useState(false)
  const [jigsawWin, setJigsawWin] = useState(false)
  const [matching, setMatching] = useState(false)
  const [matchingWin, setMatchingWin] = useState(false)
  const [matchingE, setMatchingE] = useState(false)
  const [lockNum, setLockNum] = useState(false)
  const [intro, setIntro] = useState(true)
  const [timer, setTimer] = useState(0)
  const [exit, setExit] = useState(false)
  const navigate = useNavigate()
  const [muteAudio, setMuteAudio] = useState(false)

  // paper states
  const [foundPapers, setFoundPapers] = useState([false, false, false])

  //clue popups:
  const [clockFace, setClockFace] = useState(false)
  const [clock, setClock] = useState(false)
  const [gnome, setGnome] = useState(false)
  const [stool, setStool] = useState(false)
  const [chest, setChest] = useState(false)
  const [duck, setDuck] = useState(false)
  const [mirror, setMirror] = useState(false)
  const [pumpkin, setPumpkin] = useState(false)
  const [chandelier, setChandelier] = useState(false)
  const [inventory, setInventory] = useState(false)
  const [mapShow, setMapShow] = useState(false)
  const [stopper, setStopper] = useState(false)

  //audio
  const [volume, setVolume] = useState(100)

  useEffect(() => {
    if (jigsawWin) {
      document.body.style.backgroundImage = "url('/highangle.png')"
    } else {
      document.body.style.backgroundImage = "url('/highangle-paper.png')"
    }
    if (
      !jigsaw &&
      !matchingE &&
      !matching &&
      !clock &&
      !lockNum &&
      !clockFace &&
      !gnome &&
      !stool &&
      !chest &&
      !duck &&
      !mirror &&
      !pumpkin &&
      !chandelier &&
      !inventory &&
      !intro &&
      !stopper
    ) {
      setBlock(false)
    } else {
      setBlock(true)
    }
  }, [
    jigsaw,
    jigsawWin,
    matching,
    matchingE,
    clock,
    lockNum,
    block,
    clockFace,
    gnome,
    stool,
    chest,
    matchingWin,
    duck,
    mirror,
    pumpkin,
    chandelier,
    inventory,
    intro,
    stopper,
  ])

  function inventoryW() {
    const sizes = [283.562, 185.125, 379.812]
    let size = 0
    foundPapers.map((check, i) => {
      check && (size = size + sizes[i])
    })
    jigsawWin && (mapShow ? (size = 1250) : (size = 588.078))
    size == 0 && (size = 210)
    return size
  }

  function inventoryH() {
    let size = mapShow ? 710 : 280
    !foundPapers[0] &&
      !foundPapers[1] &&
      !foundPapers[2] &&
      !jigsawWin &&
      (size = 110)
    return size
  }

  let allPiecesFound = true
  for (let i = 0; i < foundPapers.length; i++) {
    if (foundPapers[i] === false) allPiecesFound = false
  }

  //audio setup:
  const duckSound = new Audio(quack)
  const chandeleierSound = new Audio(jingle)
  const gnomeSound = new Audio(gnomed)
  const pumpkinSound = new Audio(pumpkins)
  const chestSound = new Audio(treasure)
  const chairSound = new Audio(chair)
  const dishSound = new Audio(dish)
  const zip = new Audio(zipper)
  const lockedClock = new Audio(locked)

  return (
    <div className="dinner">
      <audio
        id="dinnerAudio"
        src={'/audio/dinner.mp3'}
        autoPlay={true}
        loop={true}
        // eslint-disable-next-line react/no-unknown-property
        volume={volume}
        muted={muteAudio}
      />
      {intro && (
        <div className="popup-overlay">
          <div className="intro-popup popup">
            <Intro setIntro={setIntro} />
          </div>
        </div>
      )}
      {jigsaw && (
        <div className="popup-overlay">
          <div
            className={
              allPiecesFound ? 'map-popup popup' : 'lucas-map-popup popup'
            }
          >
            <Jigsaw
              foundPapers={foundPapers}
              setJigsaw={setJigsaw}
              win={jigsawWin}
              setWin={setJigsawWin}
            />
          </div>
        </div>
      )}
      <button
        className="clue frame"
        onClick={() => !jigsawWin && setJigsaw(true)}
      >
        <img
          src={
            jigsawWin ? '/lucas-no-map.png' : '/dinner-images/lucas-map2.png'
          }
          className={block ? 'block' : jigsawWin ? 'block' : 'frame'}
          alt="frame with map"
        />
      </button>

      {lockNum && (
        <div className="popup-overlay">
          <div className="game-popup popup">
            <CombinationLock
              setLockNum={setLockNum}
              setVolume={setVolume}
              timer={timer}
              jigsawWin={jigsawWin}
              setExit={setExit}
              setStopper={setStopper}
            />
          </div>
        </div>
      )}
      {stopper && (
        <div className="popup-overlay">
          <div className="clue-popup popup">
            <Stopper setStopper={setStopper} foundPapers={foundPapers[2]} />
          </div>
        </div>
      )}
      <button
        className="clue lock"
        onClick={() =>
          exit
            ? jigsawWin
              ? navigate(`/Foyer`)
              : setStopper(true)
            : setLockNum(true)
        }
      >
        <img
          className={block ? 'block' : 'lock noMap'}
          src="/dinner-images/door-handle.png"
          alt="frame with map"
        />
      </button>

      {clock && (
        <div className="popup-overlay">
          <div className="clockbod-popup popup">
            <Clock
              setClock={setClock}
              win={matchingWin}
              foundPapers={foundPapers}
              setFoundPapers={setFoundPapers}
            />
          </div>
        </div>
      )}

      <button
        className="clue clockbod"
        onClick={() => {
          !matchingWin && lockedClock.play(), setClock(true)
        }}
      >
        <img
          className={block ? 'block' : 'clockbod'}
          src="/dinner-images/clock-body.png"
          alt="frame with map"
        />
      </button>

      {matchingE && (
        <div className="popup-overlay">
          <div className="game-popup popup">
            <MatchingExample setMatchingE={setMatchingE} />
          </div>
        </div>
      )}

      <button
        className="clue plateL"
        onClick={() => {
          dishSound.play(), setMatchingE(true)
        }}
      >
        <img
          className={block ? 'block' : 'plateL'}
          src="/dinner-images/plate-left.png"
          alt="frame with map"
        />
      </button>

      {matching && (
        <div className="popup-overlay">
          <div className="game-popup popup">
            <Matching
              setMatching={setMatching}
              win={matchingWin}
              setWin={setMatchingWin}
            />
          </div>
        </div>
      )}
      <button
        className="clue plateR"
        onClick={() =>
          matchingWin
            ? (dishSound.play(), setMatchingE(true))
            : (dishSound.play(), setMatching(true))
        }
      >
        <img
          className={block ? 'block' : 'plateR'}
          src="/dinner-images/plate-right.png"
          alt="frame with map"
        />
      </button>

      {clockFace && (
        <div className="popup-overlay">
          <div className="clockface-popup popup">
            <ClockFace setClockFace={setClockFace} clockFace={clockFace} />
          </div>
        </div>
      )}
      <button
        className="clue clockface"
        onClick={() => {
          setClockFace(true)
        }}
      >
        <img
          className={block ? 'block' : 'clockface'}
          src="/dinner-images/clock-face.png"
          alt="frame with map"
        />
      </button>

      {gnome && (
        <div className="popup-overlay">
          <div
            className={
              foundPapers[0] ? 'clue-popup popup' : 'piece-clue-popup popup'
            }
          >
            <Gnome
              setGnome={setGnome}
              foundPapers={foundPapers}
              setFoundPapers={setFoundPapers}
            />
          </div>
        </div>
      )}
      <button
        className="clue gnome"
        onClick={() => {
          gnomeSound.play()
          setGnome(true)
        }}
      >
        <img
          className={block ? 'block' : 'gnome'}
          src="/dinner-images/gnome.png"
          alt="frame with map"
        />
      </button>

      {stool && (
        <div className="popup-overlay">
          <div className="clue-popup popup">
            <Stool setStool={setStool} />
          </div>
        </div>
      )}
      <button
        className="clue stool"
        onClick={() => {
          chairSound.play(), setStool(true)
        }}
      >
        <img
          className={block ? 'block' : 'stool'}
          src="/dinner-images/fallen-stool.png"
          alt="frame with map"
        />
      </button>

      {chest && (
        <div className="popup-overlay">
          <div className="clue-popup popup">
            <Chest setChest={setChest} />
          </div>
        </div>
      )}
      <button
        className="clue chest"
        onClick={() => {
          chestSound.play(), setChest(true)
        }}
      >
        <img
          className={block ? 'block' : 'chest'}
          src="/dinner-images/chest.png"
          alt="frame with map"
        />
      </button>
      {duck && (
        <div className="popup-overlay">
          <div className="clue-popup popup">
            <Duck setDuck={setDuck} />
          </div>
        </div>
      )}
      <button
        className="clue duck"
        onClick={() => {
          duckSound.play()
          setDuck(true)
        }}
      >
        <img
          className={block ? 'block' : 'duck'}
          src="/dinner-images/duck.png"
          alt="frame with map"
        />
      </button>
      {mirror && (
        <div className="popup-overlay">
          <div
            className={
              foundPapers[1] ? 'clue-popup popup' : 'piece-clue-popup popup'
            }
          >
            <Mirror
              setMirror={setMirror}
              foundPapers={foundPapers}
              setFoundPapers={setFoundPapers}
            />
          </div>
        </div>
      )}
      <button className="clue mirror" onClick={() => setMirror(true)}>
        <img
          className={block ? 'block' : 'mirror'}
          src="/dinner-images/mirror.png"
          alt="frame with map"
        />
      </button>
      {pumpkin && (
        <div className="popup-overlay">
          <div className="clue-popup popup">
            <Pumpkin setPumpkin={setPumpkin} />
          </div>
        </div>
      )}
      <button
        className="clue pumpkin"
        onClick={() => {
          pumpkinSound.play(), setPumpkin(true)
        }}
      >
        <img
          className={block ? 'block' : 'pumpkin'}
          src="/dinner-images/pumpkins.png"
          alt="frame with map"
        />
      </button>

      {chandelier && (
        <div className="popup-overlay">
          <div className="clue-popup popup">
            <Chandelier setChandelier={setChandelier} />
          </div>
        </div>
      )}

      <button
        className="clue chandelier"
        onClick={() => {
          chandeleierSound.play()
          setChandelier(true)
        }}
      >
        <img
          className={block ? 'block' : 'chandelier'}
          src="/dinner-images/chandelier.png"
          alt="frame with map"
        />
      </button>

      {inventory && (
        <div className="popup-overlay">
          <div
            className="popup"
            id="inventory-popup"
            style={{ width: `${inventoryW()}px`, height: `${inventoryH()}px` }}
          >
            <Inventory
              setInventory={setInventory}
              map={jigsawWin}
              rips={foundPapers}
              mapShow={mapShow}
              setMapShow={setMapShow}
            />
          </div>
        </div>
      )}
      <button
        className="clue inventory"
        id="mapbutt"
        onClick={() => {
          zip.play(), setInventory(true)
        }}
      >
        <img
          className={block ? 'block' : 'inventory'}
          src="/dinner-images/backpack.png"
          alt="frame with map"
        />
      </button>
      <button
        style={{ border: 'none', background: 'none' }}
        onClick={() => {
          muteAudio ? setMuteAudio(false) : setMuteAudio(true)
        }}
      >
        <img
          src={muteAudio ? '/mute-on.png' : '/mute-off.png'}
          alt="mute button"
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            width: '70px',
            height: 'auto',
          }}
        />
      </button>
    </div>
  )
}
