import React from "react";
import MovieInfo from "./elements/MovieInfo";
import MovieBarInfo from "./elements/MovieBarInfo";
import Navigation from "./elements/Navigation";
import Actor from "./elements/Actor";
import Grid from "./elements/Grid";
import Spinner from "./elements/Spinner";

import {useMovieFetch} from "./hooks/useMovieFetch";
import { useHomeFetch } from "./hooks/useHomeFetch";

const Movie = ({ movieId }) => {
  const [movie, loading, error] = useMovieFetch(movieId);
  console.log(movie);
  return (
    <>
      <div>Movie: {movieId}</div>
      <Navigation />
      <MovieInfo />
      <MovieBarInfo />
      <Grid>
        <Actor />
        <Spinner />
      </Grid>
    </>
  );
};

export default Movie;
