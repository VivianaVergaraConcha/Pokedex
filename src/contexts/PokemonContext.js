import React, { createContext, useState, useEffect } from "react";
import { pokemonSpeciesGet } from "../constants";

export const PokemonContext = createContext();

const PokemonContextProvider = ({ children }) => {
  const pokemon_id = window.location.pathname.split("/")[2];
  const [pokemonSpecies, setPokemonSpecies] = useState("");
  const [pokemonVarienties, setPokemonVarienties] = useState([]);
  const [pokemonVariant, setPokemonVariant] = useState("");

  useEffect(() => {
    getPokemonSpecies(pokemon_id);
  }, [pokemon_id]);

  useEffect(() => {
    getVarienties();
  }, [pokemonSpecies]);

  const getPokemonSpecies = (pokemon_id) => {
     fetch(pokemonSpeciesGet(pokemon_id))
      .then((response) => response.json())
      .then((data) => {
        setPokemonSpecies(data);
      })
      .catch((error) => console.log(error));
  };

  const getVarienties = async () => {
    if (pokemonSpecies) {
      const data = pokemonSpecies.varieties.map(async (pokemon) => {
        return await fetch(pokemon.pokemon.url)
          .then((response) => response.json())
          .catch((error) => console.log(error));
      });
      const results = await Promise.all(data);
      setPokemonVarienties(results);
      setPokemonVariant(results[0])
    }
  };

  const selectVariant = (index) => {
    if (pokemonVarienties) {
      setPokemonVariant(pokemonVarienties[index]);
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemonSpecies,
        pokemonVarienties,
        pokemonVariant,
        selectVariant
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
