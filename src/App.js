import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';

const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?q=Denver,us&APPID=b8990aaf2708b856d835b6c566a1b3ec&units=imperial`

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
