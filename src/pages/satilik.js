import React from "react";
import { graphql } from "gatsby";
import SiteWrapper from "../chakra";
import Layout from "../components/layout/layout";
import AdvertList from "../components/advert/list";
import { Container } from "@chakra-ui/react";
import Title from '../components/layout/title';
import { Helmet } from 'react-helmet';

function Sale({ data }) {
  return (
    <SiteWrapper>
      <Helmet title="Satılık | Çakraz Emlak">
        <meta name="description" content="Satılık ilanlar, Çakraz Emlak"/>
        <meta name="keywords" content="çakraz, emlak, satılık, daire, satılık daire, ev, satılık ev"/>
      </Helmet>
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
