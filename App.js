import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import './App.css';
import Reducer from './store/Reducer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
