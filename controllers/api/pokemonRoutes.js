const router = require('express').Router();
const axios = require('axios');


router.get('/', async (req, res) => {
    try {
        const pokemonRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
        const pokeData = pokemonRes.data

      res.status(200).json(pokeData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.get('/:char', async (req, res) => {
      console.log(req.params.char);
    try {
        const pokemonRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.char}`)
        const pokeData = {
            sprites: pokemonRes.data.sprites.front_default,
            type: pokemonRes.data.types[0].type.name,
            type2: pokemonRes.data.types[1].type.name,

        }

      res.status(200).json(pokeData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;