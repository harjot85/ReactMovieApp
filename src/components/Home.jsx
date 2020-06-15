import React, { useState, useEffect } from "react";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from "../config";

// Components
import HeroImage from "./elements/HeroImage";
import Spinner from "./elements/Spinner";
import Grid from "./elements/Grid";
import MovieThumbs from "./elements/MovieThumbs";
import LoadMoreButton from "./elements/LoadMoreButton";
import SearchBar from "./elements/SearchBar";

// Hooks
import { useHomeFetch } from "./hooks/useHomeFetch";

const Home = () => {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();

  if(error) return <div>Something went wrong</div>
  if(!state.movies[0]) return <Spinner />

  console.log("State: ", state);
  return (
    <>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
        title={state.heroImage.original_title}
        text={state.heroImage.overview}
      />

      <SearchBar />
      <Grid />
      <MovieThumbs />
      <LoadMoreButton />
      <Spinner />
    </>
  );
};

export default Home;
