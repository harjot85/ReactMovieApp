import React from 'react';

import HeroImage from './elements/HeroImage'
import Spinner from './elements/Spinner'
import Grid from './elements/Grid'
import MovieThumbs from './elements/MovieThumbs'
import LoadMoreButton from './elements/LoadMoreButton'
import SearchBar from './elements/SearchBar'

const Home = () => (
    <>
    <HeroImage />
    <SearchBar />
    <Grid />
    <MovieThumbs />
    <LoadMoreButton />
    <Spinner />
    </>
)

export default Home