import React from "react";
import { Container } from "@chakra-ui/react";
import { graphql } from 'gatsby';
import SiteWrapper from "../chakra";
import AdvertList from "../components/advert/list";
import Layout from "../components/layout/layout";
import Title from '../components/layout/title';
import { Helmet } from 'react-helmet';

function Rent({ data }) {
  return (
    <SiteWrapper>
      <Helmet title="Kiralık | Çakraz Emlak">
        <meta name="description" content="Kiralık ilanlar, Çakraz Emlak"/>
        <meta name="keywords" content="çakraz, emlak, kiralık, daire, kiralık daire, ev, kiralık ev"/>
      </Helmet>
      <Layout>
        <Container maxWidth="container.xl" pb="8">
          <Title>Kiralık</Title>
          <AdvertList adverts={data.allStrapiAdverts.nodes} />
        </Container>
      </Layout>
    </SiteWrapper>
  );
}

export const query = graphql`
  {
    allStrapiAdverts(
      filter: { published: { eq: true }, type: { eq: "kiralik" } }
    ) {
      nodes {
        ...Advert
      }
    }
  }
`;

export default Rent;
