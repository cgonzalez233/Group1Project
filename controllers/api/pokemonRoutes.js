const router = require('express').Router();
const axios = require('axios');
const matchup = require("../../Utils/matchups")

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
        const typeArray = pokemonRes.data.types.map((type) => {
          return type.type.name
        })

        const pokeData = {
            sprites: pokemonRes.data.sprites.front_default,
            type: typeArray[0]

        }
        if (typeArray.length > 1){
          pokeData.type2 = typeArray[1]
        }

        pokeData.typeAdvantage = matchup.typeAdvantage(typeArray)

      res.status(200).json(pokeData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;