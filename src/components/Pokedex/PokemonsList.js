import React from "react";
import Grid from "@material-ui/core/Grid";
import PokemonCard from "./PokemonCard";
import propTypes from "prop-types";

const PokemonsList = ({ pokemons }) => {
  return (
    <Grid container spacing={3} className="grid-pokemons">
      {pokemons?.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            name={pokemon.name}
            number={pokemon.id}
            imagen={pokemon.sprites.other["official-artwork"].front_default}
            type={pokemon.types[0].type.name}
          />
        );
      })}
    </Grid>
  );
};

PokemonsList.propTypes = {
  pokemons: propTypes.array,
};

export default PokemonsList;
