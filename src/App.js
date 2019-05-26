import React, { Component } from 'react';
import Navbar from './components/Navbar';
import TrophyCase from './components/TrophyCase';
import CreateTrophy from './components/CreateTrophy';
import { fetchGames } from './componentFunctions/trophyCaseFunctions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { games: [], toggleRerender: false };
    this.rerenderParent = this.rerenderParent.bind(this);
  }

  componentDidMount() {
    fetchGames().then((data) => {
      this.setState({ games: data });
    });
  }

  componentDidUpdate() {
    fetchGames().then((data) => {
      this.setState({ games: data });
    });
  }

  rerenderParent() {
    this.setState({ toggleRerender: !this.state.toggleRerender });
  }

  render() {
    console.log(this.state.games);
    const { games } = this.state;
    return (
      <div className="App">
        <Navbar />
        <CreateTrophy rerender={this.rerenderParent} />
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
