import React from "react";
import GatsbyImage from "gatsby-image";
import { Box } from "@chakra-ui/react";

function Hero({ image }) {
  return (
    <Box>
      <GatsbyImage
        fluid={image.childImageSharp.fluid}
        style={{ minHeight: "350px", maxHeight: "500px", objectFit: "cover" }}
      />
    </Box>
  );
}

export default Hero;
