// Imports
import React, {useState} from 'react';
import "./App.css";
import Nav from './components/Nav';
import Main from './components/Main';
// ...
const App = () => {
  

  const [darkMode, setDarkMode] = useState(false)
  
  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className="container">
      <Nav
        handleClick={toggleDarkMode}
        darkMode={darkMode}
      />
      <Main darkMode={darkMode} />
    </div>
  )
}

export default App;

