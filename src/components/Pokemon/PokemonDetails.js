import React from "react";
import { Grid } from "@material-ui/core";

import Type from "./Type";
import Progressbar from "../Common/ProgressBar";

import { dataType } from "../../constants";

const PokemonDetails = ({ pokemon, pokedexNumber }) => {
  const { color } =
    pokemon &&
    dataType.find((element) => element.name === pokemon.types[0].type.name);

  return (
    <>
      <Grid item xs={12} md={6}  style={{ backgroundColor: color }} className="grid-item-pokemon">
        <div className="container-left-pokemon">
          <div className="text">
            <div>#{pokedexNumber}</div>
            <div className="pokemon-name">
              {pokemon.name?.toUpperCase()}
            </div>
          </div>
          <img
            src={pokemon.sprites?.other["official-artwork"].front_default}
            className="imagen"
            alt="Pokemon"
          />
        </div>
      </Grid>
      <Grid item xs={12} md={6} >
        <div className="container-right-pokemon">
          <div className="pokemon-types">
            {pokemon.types?.map((slot) => {
              return <Type key={slot.slot} name={slot.type.name}/>;
            })}
          </div>
          <div className="base-stats">Base stats</div>
          {pokemon.stats?.map((stat) => {
            return (
              <Progressbar
                key={stat.stat.name}
                name={stat.stat.name}
                value={stat.base_stat}
                color={color}
              />
            );
          })}
        </div>
      </Grid>
    </>
  );
};

export default PokemonDetails;
