import React, { Component } from 'react';
import axios from 'axios';

// const configUrls = {
//   root: 'https://ah-the-answer-backend-staging.herokuapp.com/api/articles/',
// };

const Url = {
  root: 'http://127.0.0.1:8000/api/v1/',
};

class CreateTrophy extends Component {
  constructor(props) {
    super(props);
    this.state = { title: 'Defaulted Title', platform: 'PS4', genre: 'Adventure', playCheck: false, rating:1 };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title } = this.state;
    const { platform } = this.state;
    const { genre } = this.state;
    const { rating } = this.state;
    const { playCheck } = this.state;
    axios.post(`${Url.root}games/`, {
      game: {
        title, platform, genre, user_rating: rating, is_playing: playCheck, user_id: 1,
      },
    }).then((response) => {
      // handle success
      console.log(response.data);
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="createTrophy">
        <form>
          <div className="form-row">
            <div className="col-sm-2 mb-1 mr-3">
              <label htmlFor="titleInput">Title</label>
              <input type="text" className="form-control" id="titleInput" name="title" onChange={this.handleChange} placeholder="Enter game title..." required />
            </div>
            <div className="col-sm-2 mb-1 mr-3">
              <div className="form-group">
                <label htmlFor="selectPlatform">Platform</label>
                <select className="form-control" onChange={this.handleChange} id="selectPlatform" name="platform">
                  <option selected>PS4</option>
                  <option>PC</option>
                  <option>XBox One</option>
                  <option>Nintendo Switch</option>
                </select>
              </div>
            </div>
            <div className="col-sm-2 mb-1 mr-3">
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Genre</label>
                <select className="form-control" id="selectGenre" onChange={this.handleChange} name="genre">
                  <option selected>First-person shooter</option>
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
                <select className="form-control" id="isPlaying" onChange={this.handleChange} name="playCheck" defaultValue={false}>
                  <option  selected value={false}>Nope.</option>
                  <option value>Yup!</option>
                </select>
              </div>
            </div>
            <div className="col-sm-2 mb-1 mr-3">
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Give Your Rating.</label>
                <select className="form-control" id="rateGame" onChange={this.handleChange} name="rating">
                  <option selected>0</option>
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
              <button class="btn btn-primary" type="submit" onClick={this.handleSubmit}>Create Trophy!</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default (CreateTrophy);
