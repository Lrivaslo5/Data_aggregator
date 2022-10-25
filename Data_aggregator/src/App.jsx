import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* Navigation Bar */}
      <Navbar></Navbar>
      <div className="App">
          <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.jsx</code> and save to test HMR
              </p>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
          </div>          
        </div>

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
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
