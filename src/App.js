import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';


class App extends React.Component {

  state = {
    username: null
  }
  render(){
    const { isLoggedIn, username } = this.state
    const login = (user) => {
      console.log(user)
      if(user.jwt){
        this.setState({ username: user.user.username })
        localStorage.setItem(("loggedToken", user.jwt), ("username", user.user.username))
      }
      else {
        console.log(user.message)
      }
    }
    const logout = () => {
      this.setState({
        username: null
      })
      localStorage.clear()
    }
    return (
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} username={username} login={login} logout={logout}/>
      </div>
    );

  }
}

export default App;
