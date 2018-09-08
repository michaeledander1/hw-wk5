import React, { Component } from 'react';
import './App.css';
import PizzaListContainer from './components/PizzaListContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PizzaListContainer /> 
      </div>
    );
  }
}

export default App