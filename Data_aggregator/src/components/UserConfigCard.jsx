import './UserConfig.css'

function UserConfig(props) {
    return (
      <div id = "user-config-card">
        <div id = "config-title">
            <img id='logo-title' src="/src/assets/Logo.svg"/>
            <div>Data Aggregator</div>
            <button onClick ={() => {props.toggleConfig()}}id = "toggle">^</button>
        </div>
        <div id = 'config-content'>
            <div id = "profile-icon"></div>
            <ul id = "config-list">
                <li id = "list-title">Luis Rivas Lopez</li>
                <li>lrivaslo@terpmail.umd.edu</li>
                <li><a href=''>Account Configuration</a></li>
                <li><a href=''>Sign Out</a></li>
            </ul>
        </div>
      </div>
    )
}

export default UserConfig
  