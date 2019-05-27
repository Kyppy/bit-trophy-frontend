import React, { Component } from 'react';
import Navbar from './components/Navbar';
import TrophyCase from './components/TrophyCase';
import CreateTrophy from './components/CreateTrophy';
import EditTrophy from './components/EditTrophy';
import DeleteTrophy from './components/DeleteTrophy';
import { fetchGames } from './componentFunctions/trophyCaseFunctions';

let updateFlag = true;
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
    const { toggleRerender } = this.state;
    if (updateFlag === toggleRerender) {
      fetchGames().then((data) => {
        this.setState({ games: data });
        updateFlag = !toggleRerender;
      });
    }
  }

  rerenderParent() {
    this.setState({ toggleRerender: !this.state.toggleRerender });
  }

  render() {
    const { games } = this.state;
    return (
      <div className="App">
        <Navbar />
        <CreateTrophy rerenderParent={this.rerenderParent} />
        <div className="row">
          <div className="col-sm-1" />
          <div className="col-sm-10">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Trophy ID</th>
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
          </div>
          <div className="col-sm-1" />
        </div>
        <div className="d-flex justify-content-center">
          <div className="col-sm-8">
            <EditTrophy rerenderParent={this.rerenderParent} games={games} />
          </div>
          <div className="col-sm-4">
            <DeleteTrophy rerenderParent={this.rerenderParent} games={games} />
          </div>
        </div>
      </div>
    );
  }
}

export default (App);
