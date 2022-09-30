const Express = require('express');

const app = Express();
const axios = require('axios');


async function test(poke){
  const pkm = await axios.get("https://pokeapi.co/api/v2/pokemon/" + poke);
  //console.log('POKEMON!@!#!@#$%!#!#%!' , pkm.data.sprites.front_default)
  return pkm.data.sprites.front_default;
}

//GET
app.get('/' , async (req, res) => {
  const pokemonDitto = await test('ditto');
  res.send(`<img src=${pokemonDitto}></img>`)
})

app.get('/:pokemon' , async (req, res) => {
  const pokeman = await test(req.params.pokemon)
  res.send(`<img src=${pokeman}></img>`)
})

//LISTEN
const PORT = 3000;
app.listen(PORT, (req, res) => {
  console.log(`LISTENING ON ${PORT}`)
})
