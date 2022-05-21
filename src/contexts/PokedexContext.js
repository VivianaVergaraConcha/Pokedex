import React, { createContext, useState, useEffect } from "react";
import { pokedexGet, pokemonSpeciesGet } from "../constants";

export const PokedexContext = createContext();

const PokedexContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const limit = 12;

  useEffect(() => {
    getPokedex();
  }, [offset]);

  const getData = async (url) => {
    return await fetch(url)
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }; 

  const getPokedex = async () => {
    try {
      setLoading(true);
      const data = await getData(pokedexGet(limit, offset));

      const pokemonSpeciesPromise = data.results.map(async (pokemon) => {
        return await getData(pokemon.url);
      });
      const pokemonSpecies = await Promise.all(pokemonSpeciesPromise);

      const pokemonPromise = pokemonSpecies.map(async (pokemon) => {
        return await getData(pokemon.varieties[0].pokemon.url);
      });
      const results = await Promise.all(pokemonPromise);

      if (totalPages === 0) {
        setTotalPages(Math.round(data.count / 12));
      }

      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const changePage = (event, page) => {
    setOffset(limit * (page - 1));
  };

  const getPokemon = async (name_number) => {
    try {
      setLoading(true);
      const data = await getData(pokemonSpeciesGet(name_number));
      if(data) {
        const results = await getData(data.varieties[0].pokemon.url);
        setPokemons(new Array(results));
      } else {
        setPokemons([]);
        setTotalPages(0);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const searchPokemon = (
    e,
    name_number = document
      .querySelector("#name_number")
      .value.toLowerCase()
      .trim()
  ) => {
    if (e.type === "keypress" && e.key !== "Enter") return;
    if (name_number) {
      getPokemon(name_number);
    }
  };

  return (
    <PokedexContext.Provider
      value={{
        pokemons,
        loading,
        totalPages,
        changePage,
        searchPokemon,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
};

export default PokedexContextProvider;
