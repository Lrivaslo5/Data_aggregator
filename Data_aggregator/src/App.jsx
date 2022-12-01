import { useState } from 'react'
import NavBar from './components/NavBar'
import BatchItem from './components/BatchItem'


import './App.css'



function App() {
  // let [mode, setMode] = useState("light");
  // function handleClick(){
  //   setMode( () => (mode == "light" ? "dark" : "light"));
  // }
  return (
    <div className={'App '}>      
      {/* Navigation Bar */}
      <NavBar></NavBar>
      <div className="card">
        {/* <button onClick={handleClick}>
          toggle
        </button> */}
        <h3>Account Overview</h3>
        <div id = 'dash-cont'>
          <img id='dash1' src="/src/assets/dash1.png"/>
          <img id='dash2' src="/src/assets/dash1.png"/>
          <img id='dash3' src="/src/assets/dash1.png"/>
        </div>
      </div>     
      <div className="card">
        {/* <button onClick={handleClick}>
          toggle
        </button> */}
        <h3 id = "batch-title">Batch List</h3>
        <div className="card-section">
        <div id= "batch-list">
          <ul>
            <li>Batch ID</li>
            <li>Imported</li>
            <li>Status</li>
            <li>Success/Error/Saved</li>
            <li>Source</li>
            <li>Ran On</li>
          </ul>
          <BatchItem></BatchItem>
        </div>

        </div>

      </div>         
    </div>
  )
}

export default App
