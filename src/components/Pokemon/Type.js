import React from "react";
import { dataType } from "../../constants";
import propTypes from "prop-types";

const Type = ({ name }) => {
  const { color, imagen } = dataType.find((element) => element.name === name);
  return (
    <div
      className="container-type"
      style={{
        backgroundColor: color,
      }}
    >
      <img src={imagen} width={33} alt="Type pokemon"/>
      <div className="text">{name.toUpperCase()}</div>
    </div>
  );
};

Type.propTypes = {
  name: propTypes.string,
};

export default Type;
