import React, { useContext } from "react";
import { Grid } from "@material-ui/core";

import PokemonDetails from "./PokemonDetails";
import Varienties from "./Varienties";

import { PokemonContext } from "../../contexts/PokemonContext";

const Pokemon = () => {
  const { pokemonSpecies, pokemonVarienties, pokemonVariant, selectVariant } =
    useContext(PokemonContext);

  return (
    <>
      {pokemonVarienties.length > 1 && (
        <Varienties
        pokemonVarienties={pokemonVarienties}
          seleccionaPokemon={selectVariant}
          pokemonVariant={pokemonVariant}
        />
      )}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <PokemonDetails
          pokemon={pokemonVariant}
          pokedexNumber={pokemonSpecies.id}
        />
      </Grid>
    </>
  );
};

export default Pokemon;
