import React from "react";
import { graphql } from "gatsby";
import SiteWrapper from "../chakra";
import Layout from "../components/layout/layout";
import AdvertList from "../components/advert/list";
import { Container } from "@chakra-ui/react";
import Title from '../components/layout/title';

function Sale({ data }) {
  return (
    <SiteWrapper>
      <title>Satılık | Çakraz Emlak</title>
      <Layout>
        <Container maxWidth="container.xl" pb="8">
          <Title>Satılık</Title>
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
