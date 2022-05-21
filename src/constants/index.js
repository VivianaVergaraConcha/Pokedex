const base_url = "https://pokeapi.co/api/v2/";
const pokemon_species_get = "pokemon-species/";
const offset = "offset="
const limit = "limit="
const pokemon_get = "pokemon/";

export const pokedexGet = (q_limit, q_offset) => `${base_url}${ pokemon_species_get }?${limit}${q_limit}&${offset}${q_offset}`;
export const pokemonSpeciesGet = pokemon_name_number => `${base_url}${ pokemon_species_get }${pokemon_name_number}`;
export const pokemonGet = pokemon_name_number => `${base_url}${ pokemon_get }${pokemon_name_number}`;

export const dataType = [
    {
      "name": "normal",
      "color": "#919AA2",
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg"
    },
    {
      "name": "fighting",
      "color": "#E0306A",
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg"
    },
    {
      "name": "flying",
      "color": "#89AAE3",
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg"
    },
    {
      "name": "poison",
      "color": "#B567CE",
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg"
    },
    {
      "name": "ground",
      "color": "#E87236",
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg"
    },
    {
      "name": "rock",
      "color": "#C8B685",
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg"
    },
    {
      "name": "bug",
      "color": "#83C300",
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg"
    },
    {
      "name": "ghost",
      "color": "#4C6AB2",
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg"
    },
    {
      "name": "steel",
      "color": "#5A8EA2",
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg"
    },
    {
      "name": "fire",
      "color": "#FF9741",
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg"
    },
    {
      "name": "water",
      "color": "#3692DC",
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg"
    },
    {
      "name": "grass",
      "color": "#38BF4B",
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg"
    },
    {
      "name": "electric",
      "color": "#FBD100",
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg"
    },
    {
      "name": "psychic",
      "color": "#FF6675",
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg"
    },
    {
      "name": "ice",
      "color": "#4CD1C0",
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg"
    },
    {
      "name": "dragon",
      "color": "#006FC9",
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg"
    },
    {
      "name": "dark",
      "color": "#5B5466",
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg"
    },
    {
      "name": "fairy",
      "color": "#FB89EB",
      "imagen": "https://upload.wikimedia.org/wikipedia/commons/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg"
    },
    {
      "name": "unknown",
      "color": "#F5F5EF",
      "imagen": ""
    },
    {
      "name": "shadow",
      "color": "#4F4F4E",
      "imagen": ""
    }
  ];  

