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
import './Nav.css'
import Favorites from './Favorites';

export default function Navbar(props) {
    return (
        <div>
            <Router>
                <ul className='nav'>
                    <header id='title-container'>
                        <h1 id='title'>Strati<span id='cast'>Cast</span></h1>
                    </header>
                    <Link to="/"><li className='nav-element'>Home</li></Link>
                    <Link to="/search"><li className='nav-element'>Search</li></Link>
                    {
                        props.username
                        ? (<div className='login-elements'><Link to='/favorites'><li className='nav-element secondary-nav'>Favorites</li></Link>
                        <Link to='/login'><li className='nav-element secondary-nav' onClick={() => props.logout()}>Logout</li></Link></div>)

                        : (<div className='login-elements'><Link to="/login"><li className='nav-element secondary-nav'>Login</li></Link>
                        <Link to="/registration"><li className='nav-element secondary-nav'>Register</li></Link></div>)
                    }


                </ul>


                <Switch>
                    <Route exact path="/" render={() => <Home isLoggedIn={props.isLoggedIn} username={props.username}/>}/>
                    <Route path="/search">
                        <Search />
                    </Route>
                    <Route path='/favorites' render={() => <Favorites username={props.username}/>}/>)
                    <Route path="/login" render={() => <Login isLoggedIn={props.isLoggedIn} username={props.username} login={props.login}/>} />
                    <Route path="/registration" render={() => <Registration isLoggedIn={props.isLoggedIn} username={props.username}/>} />
                </Switch>

            </Router>
        </div>
    )
}
