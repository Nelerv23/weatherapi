import React, { useEffect, useState } from "react";
import './App.css';
import Photo1 from "./weatherback.jpg"

function App() {
  const [Weather, setWeather] = useState('');
  const fetchData = async () => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${document.getElementById('search').value}&APPID=cbf0ac69000dbb4b3e53422d080025b2`);
    const json = await response.json();
    var list = []
    list.push(
      <div className="grid">
        <h2 className="Part1">{json.name}</h2>
        <h2 className="Part1">{json.sys.country}</h2>
        <h2 className="Part1">{parseFloat((json.main.temp - 273.15) * 9/5 + 32).toFixed(2)}&#176;F</h2>
      </div>
    )
    setWeather(list)
  }

  return (
    <div className="weath" style={{ backgroundImage: `url(${Photo1})`, backgroundPosition: "center" }}>

    <div className="text">
      <h1 id="head">Today's Weather</h1>
      <div className="search">
        <input type='text' id="search" placeholder="Search Here" />
        <button onClick={() => fetchData()}>Search</button>
      </div>
      

      {Weather}
      </div>
    </div>
  );
};



export default App;