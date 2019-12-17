const fetch = require('node-fetch');

const get = async () => {
  console.log('BEFORE');

  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=6');
  const { results } = await res.json();


  console.log(results);

  const proms = results.map(async ({ url }) => new Promise((resolve) => {
    fetch(url)
      .then((fetchres) => fetchres.json())
      .then(({ name, types }) => {
        const ttt = types.map(({ type }) => type.name);
        resolve({ name, types: ttt });
      });
  }));
  console.log(proms);

  const resss = await Promise.all(proms);
  console.log(resss);

  // results.forEach(async ({ name, url }) => {
  //   const res2 = await fetch(url);
  //   const { types } = await res2.json();
  //   const tres = types.map(({ type }) => type.name);
  //   console.log(name, ...tres);
  // });

  console.log('AFTER');
};

get();
