import React, { Component } from 'react';
import './assets/css/App.css'
 
import AppRoute from './router/router.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <AppRoute/>
      </div>
    );
  }
}

export default App;
