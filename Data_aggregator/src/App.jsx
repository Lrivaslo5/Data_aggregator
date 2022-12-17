import { useState } from 'react'

// React Components
import NavBar from './components/NavBar'
import BatchItem from './components/BatchItem'

// Styling 
import './App.css'
import './components/BatchItem.css'

// Dummy Objects
import testData from './assets/testdata.json'



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2bd88b8808mshe081394e7b648d3p15dba7jsna151fd74b564',
		'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
	}
};
// parsing name into list


// Call APi function
function callApi(){
  fetch('https://rawg-video-games-database.p.rapidapi.com/games?key=2da548a95bdd443089c022031276426e', options)  
  .then(response => response.json())
	.then(data => console.log(data.results[1].name))
	.catch(err => console.error(err));
}
function testJson(){
  console.log()
}

function App() {
// dark mode implmentation - unused
  // let [mode, setMode] = useState("light");
  // function handleClick(){
  //   setMode( () => (mode == "light" ? "dark" : "light"));
  // }
  return (
    <div className={'App'}>      
      <NavBar></NavBar>
      <div className="card">
        {/* <button onClick={callApi}>
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
        {/* <button onClick={testJson}>
          toggle
        </button> */}
        {/* Turn batch Title into card title for reusabilty*/}
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
          <BatchItem></BatchItem>
        </div>
        </div>
      </div>         
    </div>
  )
}

export default App
