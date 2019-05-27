import React, { Component } from 'react';
import axios from 'axios';

// const configUrls = {
//   root: 'https://ah-the-answer-backend-staging.herokuapp.com/api/articles/',
// };

const Url = {
  root: 'http://127.0.0.1:8000/api/v1/',
};

class EditTrophy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Defaulted Title',
      platform: 'PS4',
      genre: 'Adventure',
      playCheck: false,
      rating: 1,
      canPost: true,
      gameID: 0,
      hideEdit: true,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { gameID } = this.state;
    this.setState({ canPost: false });
    const { title } = this.state;
    const { platform } = this.state;
    const { genre } = this.state;
    const { rating } = this.state;
    const { playCheck } = this.state;
    const { canPost } = this.state;
    if (canPost) {
      axios.put(`${Url.root}game/${gameID}/`, {
        game: {
          title, platform, genre, user_rating: rating, is_playing: playCheck, user_id: 1,
        },
      }).then((response) => {
        // handle success
        this.setState({ canPost: true });
        this.props.rerenderParent();
      });
    }
  };

  editReady = () => {
    const { gameID } = this.state;
    axios.get(`${Url.root}game/${gameID}/`).then((response) => {
      // handle success
      const gameData = response.data.game[0];
      this.setState({
        title: gameData.title,
        platform: gameData.platform,
        genre: gameData.genre,
        playCheck: gameData.is_playing,
        rating: gameData.user_rating,
      });
      this.setState({ hideEdit: false });
      console.log(this.state);
    });
  }

  render() {
    const { title } = this.state;
    const { hideEdit } = this.state;
    const { games } = this.props;
    return hideEdit ? (
      <div className="editTrophy">
        <div className="row">
          <div className="col-sm-2">
            <button className="btn btn-primary" type="submit" onClick={this.editReady}>Edit A Trophy?</button>
          </div>
          <div className="col-sm-6">
            <select className="custom-select custom-select-sm" name="gameID" onChange={this.handleChange}>
              <option selected>Select A Trophy ID To Edit</option>
              {games.map(item => (
                <option key={item.id}>{item.id}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    ) : (
      <div className="editTrophy">
        <form>
          <div className="form-row">
            <div className="col-sm-2 mb-1 mr-3">
              <label htmlFor="titleInput">Title</label>
              <input type="text" className="form-control" id="titleInput" name="title" defaultValue={title} onChange={this.handleChange} placeholder="Enter game title..." required />
            </div>
            <div className="col-sm-2 mb-1 mr-3">
              <div className="form-group">
                <label htmlFor="selectPlatform">Platform</label>
                <select className="form-control" onChange={this.handleChange} id="selectPlatform" name="platform">
                  <option value={null} selected>--Change Platform--</option>
                  <option>PS4</option>
                  <option>PC</option>
                  <option>Xbox One</option>
                  <option>Nintendo Switch</option>
                </select>
              </div>
            </div>
            <div className="col-sm-2 mb-1 mr-3">
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Genre</label>
                <select className="form-control" id="selectGenre" onChange={this.handleChange} name="genre">
                  <option value={null} selected>--Change Genre--</option>
                  <option>First-person shooter</option>
                  <option>Fighting</option>
                  <option>Adventure</option>
                  <option>Sports</option>
                  <option>Role-playing game</option>
                  <option>Platformer</option>
                </select>
              </div>
            </div>
            <div className="col-sm-2 mb-1 mr-3">
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Still Playing?</label>
                <select className="form-control" id="isPlaying" onChange={this.handleChange} name="playCheck">
                  <option value={null} selected>--Select Choice--</option>
                  <option value={false}>Nope.</option>
                  <option value>Yup!</option>
                </select>
              </div>
            </div>
            <div className="col-sm-2 mb-1 mr-3">
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Rating</label>
                <select className="form-control" id="rateGame" onChange={this.handleChange} name="rating">
                  <option value={null} selected>--Change Rating--</option>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
              </div>
            </div>
            <div className="col-sm-2 mb-2">
              <button className="btn btn-primary" type="submit" onClick={this.handleSubmit}>Submit Changes</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default (EditTrophy);
