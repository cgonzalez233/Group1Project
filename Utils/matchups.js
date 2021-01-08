// Pokemon types

const typeInfo = [{
        type: "water",
        weak: ["electric", "grass"],
        strong: ["rock", "fire", "ground"],
        exceptions: []
    },
    {
        type: "ground",
        weak: ["water", "grass", "ice"],
        strong: ["rock", "fire", "steel", "poison", "electric"],
        exceptions: ["electric"]
    },
    {
        type: "normal",
        weak: ["fighting"],
        strong: [],
        exceptions: ["ghost"]
    },
    {
        type: "fire",
        weak: ["water", "ground", "rock"],
        strong: ["grass", "ice", "bug", "steel"],
        exceptions: []
    },
    {
        type: "grass",
        weak: ["fire", "ice", "poison", "flying", "bug"],
        strong: ["water", "ground", "rock"],
        exceptions: []
    },
    {
        type: "electric",
        weak: ["ground"],
        strong: ["water", "flying"],
        exceptions: []
    },
    {
        type: "ice",
        weak: ["fire", "fighting", "rock", "steel"],
        strong: ["grass", "ground", "flying", "dragon"],
        exceptions: []
    },
    {
        type: "fighting",
        weak: ["flying", "psychic", "fairy"],
        strong: ["normal", "ice", "rock", "dark", "steel"],
        exceptions: []
    },
    {
        type: "poison",
        weak: ["ground", "psychic"],
        strong: ["grass", "fairy"],
        exceptions: []
    },
    {
        type: "flying",
        weak: ["electric", "ice", "rock"],
        strong: ["grass", "fighting", "bug"],
        exceptions: ["ground"]
    },
    {
        type: "psychic",
        weak: ["bug", "ghost", "dark"],
        strong: ["fighting", "poison"],
        exceptions: []
    },
    {
        type: "bug",
        weak: ["fire", "flying", "rock"],
        strong: ["grass", "psychic", "dark"],
        exceptions: []
    },
    {
        type: "rock",
        weak: ["water", "grass", "fighting", "ground", "steel"],
        strong: ["fire", "ice", "ground", "bug"],
        exceptions: []
    },
    {
        type: "ghost",
        weak: ["ghost", "dark"],
        strong: ["psychic", "ghost"],
        exceptions: ["normal", "fighting"]
    },
    {
        type: "dark",
        weak: ["fighting", "bug", "fairy"],
        strong: ["psychic", "ghost"],
        exceptions: ["psychic"]
    },
    {
        type: "dragon",
        weak: ["ice", "dragon", "fairy"],
        strong: ["dragon"],
        exceptions: []
    },
    {
        type: "steel",
        weak: ["fire", "fighting", "ground"],
        strong: ["ice", "rock", "fairy"],
        exceptions: ["poison"]
    },
    {
        type: "fairy",
        weak: ["poison", "steel"],
        strong: ["fighting", "dragon", "dark"],
        exceptions: ["dragon"]
    }
];
// Pokemon types

const typeAdvantage = (types) => {
    const result = {
        weak: [],
        strong: []
    }

    const exceptions = [];
    types.forEach(type => {
        const thisType = typeInfo.filter((element) => element.type === type)[0];

        thisType.strong.forEach((strength) => {
            if (result.strong.indexOf(strength) < 0) result.strong.push(strength);
        });
        thisType.weak.forEach((weakness) => {
            if (types.indexOf(weakness) < 0 && result.weak.indexOf(weakness) < 0) result.weak.push(weakness);
        });
        thisType.exceptions.forEach((exception) => {
            if (exceptions.indexOf(exception) < 0) exceptions.push(exception);
        });
    });

    result.weak = result.weak.filter((weakness) => exceptions.indexOf(weakness) < 0);

    return result;
};
const pokemon = {
    types: ["ghost"]
};

// const matchup = typeAdvantage(pokemon.types);
// console.log(`Weaknesses: ${matchup.weak}`);
// console.log(`Strengths: ${matchup.strong}`);

module.exports = {typeAdvantage}