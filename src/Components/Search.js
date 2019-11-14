import React, { Component } from 'react'

export default class Search extends Component {
    state = {
        citySearch: "",
        countrySearch: ""
    }
    render() {
        const searchHandler = event => {
            console.log(event.target.name)
            this.setState({ citySearch: event.target.value})
        }
        return (
            <div>
                <form>
                    <input type='text' placeholder="Denver" value={this.state.citySearch} onChange={searchHandler} name='city' />
                    <input type='text' placeholder="US" value={this.state.countrySearch} onChange={searchHandler} name='country' />
                    <button>Search</button>
                </form>
            </div>
        )
    }
}
