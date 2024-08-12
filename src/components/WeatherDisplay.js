import React from 'react'
 
function WeatherDisplay({Data}) {
    const {temperature, conditions} = Data;
 
    const temperatureStyle ={
        color: temperature > 20 ? 'red' : 'blue',
    };
 
  return (
    <div>
      <p >Temperature: <span style={temperatureStyle}>{temperature}</span></p>
      <p>Conditions: {conditions}</p>
    </div>
  )
}
 
export default WeatherDisplay
