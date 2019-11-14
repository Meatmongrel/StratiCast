import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Login from './Login';
import Registration from './Registration';
import Search from './Search';
import Home from './Home';
import App from '../App';
import './Nav.css'

export default function Navbar() {
    return (
        <div>
            <Router>
                <ul className='nav'>
                    <header id='title-container'>
                        <h1 id='title'>Strati<span id='cast'>Cast</span></h1>
                    </header>
                    <Link to="/"><li className='nav-element'>Home</li></Link>
                    <Link to="/search"><li className='nav-element'>Search</li></Link>
                    <Link to="/login"><li className='nav-element'>Login</li></Link>
                    <Link to="/registration"><li className='nav-element'>Register</li></Link>

                </ul>


                <Switch>
                    <Route exact path="/" render={() => <Home />}/>
                    <Route path="/search">
                        <Search />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/registration">
                        <Registration />
                    </Route>
                </Switch>

            </Router>
        </div>
    )
}
