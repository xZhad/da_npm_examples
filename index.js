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

const all = async () => {
  const proms = [];
  for (let i = 1; i <= 25; i += 1) {
    proms.push(axios.get(`https://rickandmortyapi.com/api/character/?page=${i}`));
  }
  const res = await Promise.all(proms);
  const datas = res.map((r) => r.data.results);
  const x = [];
  for (let i = 0; i < datas.length; i += 1) {
    x.push(...datas[i]);
  }
  console.log(x);
};

get();
all();
