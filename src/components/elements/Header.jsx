import React from "react";
import {Link} from "@reach/router";
import {
  StyledHeader,
  StyledRMDBLogo,
  StyledTMDBLogo,
} from "../styles/StyledHeader";
import RMDBLogo from "../images/reactMovie_logo.png";
import TMDBLogo from "../images/tmdb_logo.svg";

const Header = () => (
  <div>
    <StyledHeader>
      <div className="header-content">
        <Link to="/">
          <StyledRMDBLogo src={RMDBLogo} alt="logo-rmdb" />
        </Link> 
        <StyledTMDBLogo src={TMDBLogo} alt="logo-tmdb" />
      </div>
    </StyledHeader>
  </div>
);

export default Header;
