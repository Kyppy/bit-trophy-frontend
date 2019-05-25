import axios from 'axios';

// const configUrls = {
//   root: 'https://ah-the-answer-backend-staging.herokuapp.com/api/articles/',
// };

const Url = {
  root: 'http://127.0.0.1:8000/api/v1/',
};

// eslint-disable-next-line import/prefer-default-export
export const fetchGames = () => {
  return axios.get(`${Url.root}games/`)
    .then((response) => {
      // handle success
      return response.data.games;
    });
};
