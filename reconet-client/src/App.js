import {useState,useEffect} from "react";
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import NavBar from './Components/NavBar/Navbar.js';
import {darkTheme,lightTheme} from './Theme';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App=() => {
  const [darkMode,setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode?darkTheme:lightTheme}>
        <Router>
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Switch path="/">
          <Home colorSet={darkMode?darkTheme:lightTheme}/>
        </Switch>
        </Router>
    </ThemeProvider>
  );
}

export default App;
