import React from 'react'
import './App.css'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

function App() {

  return (
    <div>
      <DarkModeSwitch onChange={() => {} } checked={false} />
    </div>
  )
}

export default App
