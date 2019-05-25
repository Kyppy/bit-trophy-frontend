import React, { Component } from 'react';
import Navbar from './components/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { rows: '', change: '' };
  }

  render() {
    return (
      <Navbar />
    );
  }
}

export default (App);
