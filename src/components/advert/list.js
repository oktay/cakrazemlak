import React from "react";
import { graphql } from "gatsby";
import { Flex, Grid, Stack, Text } from "@chakra-ui/react";
import AdvertCard from "./card";
import { FiInfo } from 'react-icons/fi';

function AdvertList({ adverts }) {
  return adverts.length ? (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap="12"
    >
      {adverts.map((advert) => (
        <AdvertCard key={advert.id} advert={advert} />
      ))}
    </Grid>
  ) : (
    <Stack py="36" border="2px dashed" borderColor="gray.200" borderRadius="lg" alignItems="center">
      <Flex color="gray.300">
        <FiInfo fontSize="36px" />
      </Flex>
      <Text color="gray.300" maxWidth="container.sm" textAlign="center">İlan yok daha sonra tekrar ziyaret ediniz</Text>
    </Stack>
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
      publicURL
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
