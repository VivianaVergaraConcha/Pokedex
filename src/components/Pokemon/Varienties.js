import React from "react";
import { FormControl, NativeSelect, FormHelperText  } from "@material-ui/core";

const Varienties = ({ pokemonVarienties, seleccionaPokemon }) => {
  const handleChange = (event) => {
    seleccionaPokemon(event.target.value);
  };

  return (
    <div className="content-pokemon-varienties">
      <FormControl className="form-control">
        <NativeSelect
            className="select-empty"
            onChange={handleChange}
          >
            {pokemonVarienties &&
              pokemonVarienties?.map((varietie, index) => {
                return (
                  <option key={varietie.id} value={index}>
                    {varietie.name}
                  </option>
                );
              })}
          </NativeSelect>
        <FormHelperText>Varieties</FormHelperText>
      </FormControl>
    </div>
  );
};

export default Varienties;
