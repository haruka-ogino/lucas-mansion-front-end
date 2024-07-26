import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

//audio:
import dinner from '/audio/dinner.mp3'
import foyer from '/audio/foyer.mp3'
import mazeSing from '/audio/maze-sing.mp3'
import Timer from './Timer'
import GitHub from './GitHub'

function App() {
  const location = useLocation()

  useEffect(() => {
    // RegEx will break path into just the words
    const titleWords: RegExpMatchArray | null =
      location.pathname.match(/[a-z]+/gi)
    const newTitle: string | undefined = titleWords
      ?.map((ele) => {
        return ele.charAt(0).toUpperCase() + ele.slice(1)
      })
      .join(' ')
    document.title = newTitle
      ? `Lucas' Mansion - ${newTitle}`
      : "Lucas' Mansion"
  }, [location])

  return (
    <>
      <div className="app">
        <GitHub />
        {location.pathname !== '/end-page' && <Outlet />}
        <Timer />
      </div>
    </>
  )
}

export default App
