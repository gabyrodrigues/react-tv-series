import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Intro from '../Intro';
import Series from '../../containers/Series';
import 'whatwg-fetch';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> TV Series List </h1>
        </header>
        <Intro message="Here you can find all." />
        
        <Series />
      </div>
    );
  }
}

export default App;
