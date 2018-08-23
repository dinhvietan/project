import React, { Component } from 'react';
import './App.css';
import AppRouter from './Component/AppRouter';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <AppRouter/>
      </div>
    );
  }
}

export default App;
