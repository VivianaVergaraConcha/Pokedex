import React, { useContext } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { Container } from "@material-ui/core";

import { PokedexContext } from "../../contexts/PokedexContext";

import SearchPokemon from "./SearchPokemon";
import PokemonsList from "./PokemonsList";
import Loader from "../Common/Loader";
import Message from "../Common/Message";

import magikarp from "../../assets/img/magikarp.gif"

const Pokedex = () => {
  const { pokemons, loading, totalPages, changePage, searchPokemon } =
    useContext(PokedexContext);
  return (
    <Container fixed maxWidth="lg" className="container">
      <SearchPokemon searchPokemon={searchPokemon} />
      {!loading ? (
        pokemons.length ? (
            <PokemonsList pokemons={pokemons} />
        ) : (
          <Message title="No Result" message="Pokémon is not found" image={magikarp} />
        )
      ) : (
        <Loader />
      )}
      {totalPages > 0 && (
        <Pagination
          count={totalPages}
          onChange={changePage}
          boundaryCount={2}
        />
      )}
    </Container>
  );
};

export default Pokedex;
