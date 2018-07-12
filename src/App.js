import React, { Component } from 'react';
import './App.css';
import Search from './containers/Search';
import View from './containers/View';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <br />
        <View />
      </div>
    );
  }
}

export default App;
