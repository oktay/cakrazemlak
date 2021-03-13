import React from "react";
import { graphql } from "gatsby";
import { Grid } from "@chakra-ui/react";
import AdvertCard from "./card";

function AdvertList({ adverts }) {
  return (
    <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap="12">
      {adverts.map((advert) => (
        <AdvertCard key={advert.id} advert={advert} />
      ))}
    </Grid>
  );
}

export const query = graphql`
  fragment Advert on StrapiAdverts {
    bathcount
    buildage
    created_at(formatString: "D MMMM YYYY", locale: "tr")
    description
    size
    roomcount
    floorcount
    floorcurrent
    furnished
    heating
    highlight
    id
    title
    type
    slug
    location
    price
    thumbnail {
      small: childImageSharp {
        fluid(maxWidth: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    zooms: images {
      url
      width
      height
    }
    images: localImage {
      id
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thumbnails: localImage {
      id
      childImageSharp {
        fluid(maxWidth: 170) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default AdvertList;
