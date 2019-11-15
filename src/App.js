import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';


class App extends React.Component {

  state = {
    isLoggedIn: false,
    username: null
  }
  render(){
    const { isLoggedIn, username } = this.state
    const login = (user) => {
      if(user){
        this.setState({ isLoggedIn: true, username: user.username })
        localStorage.setItem("loggedToken", user.jwt)
      }
      else {
        return null
      }
    }
    const logout = () => {
      this.setState({
        isLoggedIn: false,
        username: null
      })
    }
    return (
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} username={username} login={login} logout={logout}/>
      </div>
    );

  }
}

export default App;
