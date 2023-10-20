import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Root from './Root'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-1">
      <Root></Root>
    </div>
  )
}

export default App
