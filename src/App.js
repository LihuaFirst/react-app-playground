import React from 'react';
import logo from './logo.svg';
import './App.css';


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

class LoginControl extends React.Component {

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
      </div>

  );
}

export default App;
