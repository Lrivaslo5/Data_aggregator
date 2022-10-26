import './NavBar.css'
import Search from './Search.jsx'
import Darkmode from './Darkmode.jsx'
import Profileicon from './ProfileIcon.jsx'

function NavBar() {
    return (
      <div className = "bar">
        <div className="bar-start">
          <img id='logo' src="/src/assets/Logo.svg"/>
          <p>Data Aggregator</p>
        </div>
        <div className="bar-end">
          <Search></Search>
          <Darkmode></Darkmode>
          <img id='notify' src={`/src/assets/NotficationIcon.svg`}/>
          <img id='setting' src="/src/assets/setting.svg"/>
          <Profileicon></Profileicon>
        </div>
      </div>
    )
}


export default NavBar
  