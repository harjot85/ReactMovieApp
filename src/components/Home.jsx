import React, { useState, useEffect } from "react";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from "../config";
import { NoImage } from "./images/no_image.jpg";

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
  const [
    {
      state: { heroImage, movies, currentPage, totalPages },
      loading,
      error,
    },
    fetchMovies,
  ] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState("");

  if (error) return <div>Something went wrong</div>;
  if (!movies[0]) return <Spinner />;

  console.log("State: ", movies);
  return (
    <>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
        title={heroImage.original_title}
        text={heroImage.overview}
      />

      <SearchBar />
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {movies.map((movie) => (
          <MovieThumbs
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieId={movie.id}
            mavieName={movie.original_title}
          />
        ))}
      </Grid>
      <MovieThumbs />
      <LoadMoreButton />
      <Spinner />
    </>
  );
};

export default Home;
