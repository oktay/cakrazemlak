import * as React from "react";
import { graphql } from "gatsby";
import { Container, Heading } from "@chakra-ui/react";
import SiteWrapper from "../chakra";
import Layout from "../components/layout/layout";
import Hero from "../components/layout/hero";
import AdvertList from "../components/advert/list";
import Searchbox from '../components/search/searchbox';

const IndexPage = ({ data }) => {
  const highlights = data.adverts.nodes.filter(
    (advert) => advert.highlight
  );
  return (
    <SiteWrapper>
      <title>Anasayfa | Çakraz Emlak</title>
      <Layout>
        <Hero image={data.homepage.heroimg} />
        <Container maxWidth="container.xl" mt={{ base: "-56", md:"-16" }} pb="8">
          <Searchbox adverts={data.adverts.nodes} />
          <Heading textAlign="center" my="12" fontWeight="medium">
            Öne çıkan ilanlar
          </Heading>
          <AdvertList adverts={highlights} />
        </Container>
      </Layout>
    </SiteWrapper>
  );
};

export const query = graphql`
  {
    adverts: allStrapiAdverts(filter: { published: { eq: true } }) {
      nodes {
        ...Advert
      }
    }
    homepage : strapiHomepage {
      heroimg {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

export default IndexPage;
