const axios = require('axios');

const get = async () => {
  const { data } = await axios.get('https://rickandmortyapi.com/api/character/');
  const { results } = data;
  results
    .filter(({ name }) => (name.indexOf('Morty') !== -1))
    .forEach(({ name }) => {
      console.log(name);
    });
};

get();
