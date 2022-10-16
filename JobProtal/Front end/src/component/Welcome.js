import { Grid, Typography } from "@material-ui/core";
import pic from './MaarghDharshak.jpeg';
import React from "react";

const Welcome = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
      <img src={pic} width="800" height="600"/>
      </Grid>
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h4">No jobs accepted </Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;