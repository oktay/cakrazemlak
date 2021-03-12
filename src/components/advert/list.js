import React from "react";
import { graphql } from "gatsby";
import { Grid } from "@chakra-ui/react";
import AdvertCard from "./card";

function AdvertList({ adverts }) {
  return (
    <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="12">
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
      childImageSharp {
        fluid(maxWidth: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default AdvertList;
