import { useState } from 'react'
import NavBar from './components/NavBar'

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
        <h3>Batch List</h3>
        <div id= "batch-list">
          <ul>
            <li>Batch ID</li>
            <li>Imported</li>
            <li>Status</li>
            <li>Success/Error/Saved</li>
            <li>Source</li>
            <li>Ran On</li>
          </ul>
          <div id = "batch-items">
            <div id = "item">
              <div id = "batch">#32132320</div>
              <div id = "imported">
                <h4>250 Items</h4>
                <div id = "import-widget">
                  <p>100%</p>
                  <div id = "progress-bar"></div>
                </div>
              </div>
              <div id = "status">
                <div id ="status-message">
                  <p>Status</p>
                </div>
                <div id = "errors">
                  <p>test</p>
                </div>
              </div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
            </div>
          </div>
        </div>
      </div>         
    </div>
  )
}

export default App
