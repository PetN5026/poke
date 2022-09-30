console.log('DO OR DIE. LAST CHANCE');

const Express = require('express');

const app = Express();
const axios = require('axios');


async function test(){
  const ditto = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
  console.log(ditto.data.sprites.front_default)
}

test();
