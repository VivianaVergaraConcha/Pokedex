import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import pikachu from "../../assets/img/pikachu.gif";

const Loader = () => (
  <div className="loader">
    <img src={pikachu} alt="loading..." width={300} />
    <LinearProgress style={{ width: "300px" }} />
  </div>
);

export default Loader;
