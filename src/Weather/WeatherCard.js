import React from 'react'
import './WeatherCard.css'

export default function WeatherCard(props) {


    const { weather } = props



    return (
        <div className='weather-card'>
            {
                weather.sys
                    ? ( 
                        <div id='inner-card'><h1 id='city-title'>{weather.name}, {weather.sys.country} </h1><span id='img-conatiner'><img id='weather-img' src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/></span>
                        <h5>The current condition is: {weather.weather[0].main}</h5>
                        <h5 id='current-temp'>Current temp in {weather.name}: {weather.main.temp}°F</h5>
                        <h5>Max: {weather.main.temp_max}°F</h5>
                        <h5>Min: {weather.main.temp_min}°F</h5></div>)
                    : null
            }

        </div>
    )
}
