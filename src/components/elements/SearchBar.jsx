import React, { useState, useRef } from "react";
import FontAwesome from "react-fontawesome";
import {
  StyledSearchBar,
  StyledSearchBarContent,
} from "../styles/StyledSearchBar";

const SearchBar = ({ callback }) => {
  const [state, setState] = useState();
  const timeOut = useRef(null);

  const searchMovies = (event) => {
    const searchValue = event.target.value 
    clearTimeout(timeOut.current)
    setState(searchValue)

    timeOut.current = setTimeout(() => {
        callback(searchValue);
    }, 500)
    
  };
  return (
    <StyledSearchBar>
      <StyledSearchBarContent>
        <FontAwesome className="fa-search" name="search" size="2x" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={searchMovies}
          value={state}
        />
      </StyledSearchBarContent>
    </StyledSearchBar>
  );
};

export default SearchBar;
