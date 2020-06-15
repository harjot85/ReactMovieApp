import React from "react";

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
        <StyledRMDBLogo src={RMDBLogo} alt="logo-rmdb" />
        <StyledTMDBLogo src={TMDBLogo} alt="logo-tmdb" />
      </div>
    </StyledHeader>
  </div>
);

export default Header;
