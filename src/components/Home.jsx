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
  const [{ state, loading, error }] = useHomeFetch();
  console.log("State: ", state)
  return (
    <>
      <HeroImage />
      <SearchBar />
      <Grid />
      <MovieThumbs />
      <LoadMoreButton />
      <Spinner />
    </>
  );
};

export default Home;
