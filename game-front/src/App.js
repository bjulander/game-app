import NavBar from './bars/navBar/NavBar.js'

import Main from './main/Main.js'
import './style/BarsStyle.css';
import './style/MainStyle.css';
import './style/App.css';

function App() {
  return (
    <>
       <div className="NavBarStyle">
        <NavBar />
      </div>
      <span className="MainStyle">
        <Main />
      </span>
    </>
  )
}

export default App
