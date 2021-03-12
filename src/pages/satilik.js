import React from "react";
import { graphql } from "gatsby";
import SiteWrapper from "../chakra";
import Layout from "../components/layout/layout";
import AdvertList from "../components/advert/list";
import { Container, Heading } from "@chakra-ui/react";

function Sale({ data }) {
  return (
    <SiteWrapper>
      <title>Satılık | Çakraz Emlak</title>
      <Layout>
        <Container maxWidth="container.xl" pb="8">
          <Heading textAlign="center" my="12" fontWeight="medium">
            Satılık
          </Heading>
          <AdvertList adverts={data.allStrapiAdverts.nodes} />
        </Container>
      </Layout>
    </SiteWrapper>
  );
}

export const query = graphql`
  {
    allStrapiAdverts(
      filter: { published: { eq: true }, type: { eq: "satilik" } }
    ) {
      nodes {
        ...Advert
      }
    }
  }
`;

export default Sale;
