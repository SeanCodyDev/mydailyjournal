//import libraries
import React, { Component } from 'react';

//import styling
import './App.css';

//import components
import Journal from './Journal';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Journal />
        <Footer />
      </div>
    );
  }
}

export default App;
