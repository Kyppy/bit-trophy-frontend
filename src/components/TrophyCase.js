import React, { Component } from 'react';
import axios from 'axios';

class TrophyCase extends Component {
  constructor(props) {
    super(props);
    this.state = { rows: '', change: '' };
  }

  render() {
    return (
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
      </table>
    );
  }
}

export default (TrophyCase);