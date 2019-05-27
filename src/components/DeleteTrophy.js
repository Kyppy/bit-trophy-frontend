import React, { Component } from 'react';
import axios from 'axios';

// const configUrls = {
//   root: 'https://ah-the-answer-backend-staging.herokuapp.com/api/articles/',
// };

const Url = {
  root: 'http://127.0.0.1:8000/api/v1/',
};

class DeleteTrophy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canPost: true,
      gameID: 0,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  deleteTrophy = () => {
    const { gameID } = this.state;
    const { canPost } = this.state;
    this.setState({ canPost: false });
    if (canPost) {
      axios.delete(`${Url.root}game/${gameID}/`).then((response) => {
        // handle success
        this.setState({ canPost: true });
        this.props.rerenderParent();
      });
    }
  }

  render() {
    const { games } = this.props;
    return (
      <div className="editTrophy">
        <div className="row">
          <div className="col-sm-2">
            <button className="btn btn-danger" type="submit" onClick={this.deleteTrophy}>Delete Trophy?</button>
          </div>
          <div className="col-sm-6">
            <select className="custom-select custom-select-sm" name="gameID" onChange={this.handleChange}>
              <option value={null} selected>Select A Trophy ID To Delete It</option>
              {games.map(item => (
                <option key={item.id}>{item.id}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default (DeleteTrophy);
