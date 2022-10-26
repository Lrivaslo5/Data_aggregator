import { useState } from 'react'
import NavBar from './components/NavBar'

import './App.css'



function App() {
  let [mode, setMode] = useState("light");
  function handleClick(){
    setMode(mode == "light" ? "dark" : "light");
  }
  return (
    <div className={'App ' + mode}>      
      {/* Navigation Bar */}
      <NavBar></NavBar>
          <div className="card">
              <button onClick={handleClick}>
                toggle
              </button>
              <p>
                Edit <code>src/App.jsx</code> and save to test HMR
              </p>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
          </div>          
    </div>
  )
}

export default App
