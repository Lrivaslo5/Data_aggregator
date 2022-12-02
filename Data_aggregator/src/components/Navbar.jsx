import { useState } from 'react'

import './NavBar.css'


import Search from './Search.jsx'
import Darkmode from './Darkmode.jsx'
import Profileicon from './ProfileIcon.jsx'


function NavBar() {
  
  const [Notification, setNotification] = useState('')


  return (
    <div className = "bar">
      <div className="bar__start">
        <img id='logo' src="/src/assets/Logo.svg"/>
        <div>Data Aggregator</div>
      </div>
      <div className="bar__end">
        <Search></Search>
        <Darkmode></Darkmode>
        <div onClick>
          <img id='notify' src={`/src/assets/NotficationIcon${Notification}.svg`}/>
        </div>
        <img id='setting' src="/src/assets/setting.svg"/>
        <Profileicon></Profileicon>
      </div>
    </div>
  )
}


export default NavBar
  