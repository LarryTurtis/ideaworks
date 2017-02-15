import React, { Component } from 'react';
//import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />

import './styles/App.css';
import Carousel from './carousel';
import Header from './header';
import Grid from './grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Carousel></Carousel>
        <Grid></Grid>
      </div>
    );
  }
}

export default App;

