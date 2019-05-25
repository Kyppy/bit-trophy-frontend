import React, { Component } from 'react';
import axios from 'axios';

class TrophyCase extends Component {
  constructor(props) {
    super(props);
    this.state = { rows: '', change: '' };
  }

  render() {
    const { games } = this.props;
    return games ? (
      games.map(item => (
        <tr key={item.id}>
          <td>{item.title}</td>
          <td>{item.platform}</td>
          <td>{item.genre}</td>
          <td>{item.is_playing}</td>
          <td>{item.user_rating}</td>
        </tr>
      ))
    ) : (
      <div />
    );
  }
}

TrophyCase.defaultProps = {
  games: [],
};

export default (TrophyCase);
