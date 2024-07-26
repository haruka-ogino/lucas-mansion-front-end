import { useState } from 'react'
import '../../styles/popup.css'

//audio:
import paper from '/audio/paper.mp3'
const paperSound = new Audio(paper)

interface Props {
  setMirror: React.Dispatch<React.SetStateAction<boolean>>
  setFoundPapers: React.Dispatch<React.SetStateAction<boolean[]>>
  foundPapers: boolean[]
}

export default function Mirror({
  setMirror,
  setFoundPapers,
  foundPapers,
}: Props) {
  function collect() {
    const newArr = [...foundPapers]
    newArr[1] = true
    setFoundPapers(newArr)
    // console.log("called")
  }

  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <>
      <h1>Mirror</h1>
      {foundPapers[1] === true ? (
        <p>Through the looking glass, this map piece will help you to pass.</p>
      ) : (
        <>
          <p>
            Through the looking glass, this map piece will help you to pass.
          </p>

          <img
            src="puzzle-images/corner1.png"
            alt="piece 1 of a map"
            style={{ height: '150px', marginBottom: '10px' }}
          />
          <br></br>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
          <img
            onClick={() => {
              paperSound.play()
              collect()
            }}
            style={{
              height: '30px',
              filter: isHovered
                ? 'drop-shadow(1px 1px 0 white) drop-shadow(-2px -2px 0 white) drop-shadow(2px -2px 0 white) drop-shadow(-2px 2px 0 white)'
                : 'none',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/collect.png"
            alt="collect button"
          />
        </>
      )}
      <button className="close" onClick={() => setMirror(false)}>
        x
      </button>
    </>
  )
}
