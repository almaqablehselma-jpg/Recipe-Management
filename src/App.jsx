import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Get started</h1>
      <p>Edit src/App.jsx and save to test HMR</p>
      <button onClick={() => setCount(count + 1)}>
        Count is {count}
      </button>
      <img src={heroImg} width="100" alt="" />
      <img src={reactLogo} width="50" alt="React" />
      <img src={viteLogo} width="50" alt="Vite" />
    </>
  )
}

export default App