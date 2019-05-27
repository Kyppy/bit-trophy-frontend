import axios from 'axios';

const Url = {
  root: 'https://bit-trophy.herokuapp.com/api/v1/',
};

// const Url = {
//   root: 'http://127.0.0.1:8000/api/v1/',
// };

// eslint-disable-next-line import/prefer-default-export
export const fetchGames = () => {
  return axios.get(`${Url.root}games/`)
    .then((response) => {
      // handle success
      return response.data.games;
    });
};
