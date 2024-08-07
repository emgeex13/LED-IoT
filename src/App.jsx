import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LedControl from './LedControl'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LedControl/>
    </>
  )
}

export default App
