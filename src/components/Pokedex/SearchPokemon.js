import React from "react";
import { Paper, IconButton, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import propTypes from "prop-types";

const SearchPokemon = ({ searchPokemon }) => (
  <Paper className="paper">
    <InputBase
      id="name_number"
      className="input-search"
      placeholder="Name or number"
      inputProps={{ "aria-label": "Name or number" }}
      onKeyPress={(e) => searchPokemon(e)}
    />
    <IconButton
      className="button-search"
      aria-label="search"
      onClick={(e) => searchPokemon(e)}
    >
      <SearchIcon />
    </IconButton>
  </Paper>
);

SearchPokemon.propTypes = {
  searchPokemon: propTypes.func,
};

export default SearchPokemon;
