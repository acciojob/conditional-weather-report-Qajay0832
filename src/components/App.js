

import React, { useEffect, useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";
 
const App = () => {
  const[weatherData, setWeatherData] = useState({temperature: 25, conditions: "Sunny"});
  const [tempInput, SettempInput] = useState('');
  const [condInput, setCondInput] = useState('');
 
  const handletempInput = (e)=>{
       SettempInput(e.target.value);
  }
 
  const handlecondInput = (e) => {
    setCondInput(e.target.value);
  }
 
  useEffect(()=>{
    if (tempInput !== '' && condInput !== '') {
      setWeatherData({ temperature: parseInt(tempInput, 10), conditions: condInput });
    }
  }, [tempInput,condInput]);
 
 
  return (
    <div>
      <input
       type="number"
       value={tempInput}
       onChange={handletempInput}
       placeholder="Enter temperature"
      />
 
      <input
      type="text"
      value={condInput}
      onChange={handlecondInput}
      placeholder="Enter condition"
      />
      <WeatherDisplay Data = {weatherData}/>
        {/* Do not remove the main div */}
    </div>
  )
}
 
export default App
