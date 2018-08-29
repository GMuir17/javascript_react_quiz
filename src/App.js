import React, { Component } from 'react';
import QuestionContainer from './containers/QuestionContainer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <h1>Lettuce Questions</h1>
    <QuestionContainer />
    </div>
    );
  }
}

export default App;
