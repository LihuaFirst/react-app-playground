import React from 'react';
import './App.css';

// import logo from './logo.svg';
// import { is, tsConstructorType } from '@babel/types';

import Clock from './tutorials/5-lifecycle';
import Toggle from './tutorials/6-events';
import LoginControl from './tutorials/7-condition';
import Page from './tutorials/7-warning';
import NumberList from './tutorials/8-lists';
import Blog from './tutorials/8-keys';
import NameForm from './tutorials/9-forms';
import EssayForm from './tutorials/9-textarea';
import FlavorForm from './tutorials/9-select';
import Reservation from './tutorials/9-checkbox';
import Calculator from './tutorials/10-lifting-state';


function App() {
  // Hello World & JSX
  function formateName(user) {
    return user.firstName + " " + user.lastName;
  }
  
  const user = {
    firstName: 'John', 
    lastName: 'Doe'
  }
  
  // List: props for NumberList
  const numbers = [1, 2, 3, 4, 5];

  // Keys: props for Blog
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];

  return (   
    <div> 
        <h1>Hello, {formateName(user)}</h1>
        <Calculator />
        <Clock />
        <Toggle />
        <LoginControl />
        <Page />
        <NumberList numbers={numbers} />
        <Blog posts={posts} />
        <NameForm />
        <EssayForm />
        <FlavorForm />
        <Reservation />
      </div>

  );
}

export default App;
