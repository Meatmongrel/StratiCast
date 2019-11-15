import React from 'react'
import WeatherCard from './WeatherCard'
import './WeatherContainer.css'

export default function WeatherContainer(props) {
    const { weather } = props
    const card = (weather) => {
        if(Array.isArray(weather) === true && weather.length > 1){
            return weather.map(weather => {
                return <div>
                    <WeatherCard weather={weather}/>
                </div>
            })
        } else {
            return <WeatherCard weather={weather}/>
        }
    }
    return (
        <div className='weather-container'>
            {
                weather
                ? card(weather)
                : null
            }
            
        </div>
    )
}
