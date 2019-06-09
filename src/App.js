import React, { Component } from 'react';
import Home from './pagecomponents/Home';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import LoginForm from './components/LoginForm';
import Order from './pagecomponents/Order';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/login/" component={LoginForm} />
      </Switch>
      
    );
  }
}

export default App;
