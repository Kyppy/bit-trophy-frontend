import axios from 'axios';

// const configUrls = {
//   root: 'https://ah-the-answer-backend-staging.herokuapp.com/api/articles/',
// };

const Url = {
  root: 'http://127.0.0.1:8000/api/v1/',
};

export const fetchGames = () => {
  return axios.get(`${Url.root}games/`)
    .then((response) => {
      // handle success
      return response.data.games;
    });
};

export const fetchName = () => (dispatch) => {
  return axios.get(`${Url.root}profiles/Kyppy/`, config)
    .then((response) => {
      // handle success
      dispatch({
        type: ProfileAction.FETCH_NAME,
        givenName: response.data.profile.name,
        userName: response.data.profile.username,
      });
    })
};
