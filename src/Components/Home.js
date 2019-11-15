import React, { Component } from 'react'
import "./Home.css"
import WeatherContainer from '../Weather/WeatherContainer'
require('dotenv').config()

const GEO_URL = `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.REACT_APP_SECRET_KEY}`

export default class Home extends Component {
    state = {
        weather: []
    }

    componentDidMount(){
        if(this.props.isLoggedin === true){
            fetch(GEO_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ macAddress: '00:23:6c:84:f9:4f' })
            }).then(res => res.json())
            .then(res => fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${res.location.lat}&lon=${res.location.lng}&APPID=${process.env.REACT_APP_WEATHER_KEY}&units=imperial`))
                            .then(res => res.json())
                            .then((weather) => this.setState({ weather }))
        } else {
            // this.setState({ weather: [] })
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=Denver,us&APPID=${process.env.REACT_APP_WEATHER_KEY}&units=imperial`)
                .then(res => res.json())
                .then(res => this.setState({ weather: [...this.state.weather, res]}))
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${process.env.REACT_APP_WEATHER_KEY}&units=imperial`)
                .then(res => res.json())
                .then(res => this.setState({ weather: [...this.state.weather, res]}))
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=Berlin,de&APPID=${process.env.REACT_APP_WEATHER_KEY}&units=imperial`)
                .then(res => res.json())
                .then(res => this.setState({ weather: [...this.state.weather, res]}))

        }
        // 
    }


    render() {

        const { weather } = this.state
        const { username } = this.props
    
        return (
            <div id='home-container'>
                <h2 id='user-title'>
                    {
                        username
                        ? `Hello, ${username}`
                        : "Hello, guest!"
                    }
                </h2>
                {
                    weather
                        ? <WeatherContainer weather={weather}/>
                        : null
                }
            </div>
        )
    }
}
