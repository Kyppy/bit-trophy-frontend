import React, { Component } from 'react';
import Navbar from './components/Navbar';
import TrophyCase from './components/TrophyCase';
import { fetchGames } from './componentFunctions/trophyCaseFunctions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { games: [], change: '' };
  }


  componentDidMount() {
    fetchGames().then((data) => {
      console.log(data);
      this.setState({ games: data });
    });
  }

  render() {
    const { games } = this.state;
    return (
      <div className="App">
        <Navbar />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Platform</th>
              <th scope="col">Genre</th>
              <th scope="col">Still Playing</th>
              <th scope="col">Rating</th>
            </tr>
          </thead>
          <tbody>
            <TrophyCase games={games} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default (App);
