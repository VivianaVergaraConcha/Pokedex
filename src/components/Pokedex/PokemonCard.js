import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";

import { dataType } from "../../constants";

const PokemonCard = ({ name, number, imagen, type, history }) => {
  const color = dataType.find((element) => element.name === type).color;

  return (
    <Grid item sm={12} md={6} lg={4}>
      <Card
        style={{
          backgroundColor: color,
        }}
        className="card-pokemon"
      >
        <CardActionArea onClick={() => history.push(`pokemon/${number}`)}>
          <CardContent className="card-content-pokemon">
            <img className="content-pokemon-img" src={imagen} alt="Pokemon"/>
            <div className="content-pokemon-text">
              <Typography className="title" color="textSecondary" gutterBottom>
                #{number}
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                style={{ fontWeight: "bold" }}
              >
                {name.toUpperCase()}
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default withRouter(PokemonCard);
