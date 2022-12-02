import './Navbar.css'
import {useState} from 'react'

import UserConfig from './UserConfigCard'



function Profileicon() {
  const [configCard, setConfig] = useState(false);
  const handleConfig = () => {
    setConfig(prevState => !prevState);
    console.log('that worked!');
  };
  
  return (
    <div className = "bar__profile">
      <img  onClick = {handleConfig} id = "profile-image" src="/src/assets/profile.svg"/>
      {configCard && <UserConfig configCard ={configCard} toggleConfig = {handleConfig}></UserConfig>}
    </div>
  )
}

export default Profileicon
  