import React from 'react';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); //Wheather dark mode is enabled or not

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#192d49";
      showAlert("The dark mode is enabled", "success");

      document.title = 'TextUtils - Dark Mode'

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
      document.title = 'TextUtils - Light Mode'

    }
  }


  return (
    <>
      <Router>

        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* /users--> Component 1 */
            // /users/home-->Component 2
            }
            <Route excat path="/about" element={<About />} />
            <Route excat path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text to Analyze Below" mode={mode} />} />
          </Routes>
        </div>

      </Router>
    </>
  );
}

export default App;
