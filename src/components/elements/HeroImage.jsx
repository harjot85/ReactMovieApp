import React from "react";

import { StyledHeroImage } from "../styles/StyledHeroImage";

const HeroImage = ({image, title, text}) => (
  <div>
    <StyledHeroImage image={image}>
      <div className="heroimage-content">
        <div className="heroimage-text">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </StyledHeroImage>
  </div>
);

export default HeroImage;
