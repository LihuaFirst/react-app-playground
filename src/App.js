import React from 'react';
import logo from './logo.svg';
import './App.css';
import { is } from '@babel/types';

/* Components and Props */
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
        <h2>It is {this.state.date.toLocaleTimeString()} </h2>
    )
  }
}
/* States and Lifecycle, Handling Event  */
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // binding
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
     }))
  }

  render() {
    return (
      <div>
        <h2>Toggle Button</h2>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}

/* Conditional Rendering */
function UserGreeting(props) {
  return <h2>Welcome back!</h2>;
}

function GuestGreeting(props) {
  return <h2>Please sign up.</h2>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn) {
    return <UserGreeting />;
  } 
  return <GuestGreeting />;
}
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if(isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );

  }
}

function App() {
  function formateName(user) {
    return user.firstName + " " + user.lastName;
  }
  
  const user = {
    firstName: 'John', 
    lastName: 'Doe'
  }
  
  return (   
    <div> 
        <h1>Hello, {formateName(user)}</h1>
        <Clock />
        <Toggle />
        <LoginControl></LoginControl>
      </div>

  );
}

export default App;
