import React from "react";
import { Container } from "@chakra-ui/react";
import { graphql } from 'gatsby';
import SiteWrapper from "../chakra";
import AdvertList from "../components/advert/list";
import Layout from "../components/layout/layout";
import Title from '../components/layout/title';

function Rent({ data }) {
  return (
    <SiteWrapper>
      <title>Kiralık | Çakraz Emlak</title>
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
