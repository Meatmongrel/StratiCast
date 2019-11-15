import React, { Component } from 'react'
import './Search.css'
import WeatherCard from '../Weather/WeatherCard'
require('dotenv').config()

export default class Search extends Component {
    state = {
        weather: null
    }
    render() {

        const submitHandler = event => {
            event.preventDefault()
            const formData = new FormData(event.target)
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${formData.get('city')}&APPID=${process.env.REACT_APP_WEATHER_KEY}&units=imperial`)
                .then(res => res.json())
                .then(weather => this.setState({ weather }))
        }
        return (
            <div>
                <form id='search-form' onSubmit={submitHandler}>
                    <input type='text' placeholder="Denver" name='city' />
                    {/* <input type='text' placeholder="US" value={this.state.countrySearch} onChange={searchHandler} name='country' /> */}
                    <button>Search</button>
                </form>
                    {
                        this.state.weather
                            ? (<div id='weather-search'><WeatherCard weather={this.state.weather}/></div>)
                            : null 
                    }
            </div>
        )
    }
}
