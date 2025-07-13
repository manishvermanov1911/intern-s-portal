import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TeamPage } from './Pages/TeamPage'
import FaqPage from './Pages/FaqPage'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <TeamPage/> */}
      <FaqPage/>
    </>
  )
}

export default App
