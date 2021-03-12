import { Container, Heading } from "@chakra-ui/react";
import { graphql } from 'gatsby';
import React from "react";
import SiteWrapper from "../chakra";
import AdvertList from "../components/advert/list";
import Layout from "../components/layout/layout";

function Rent({ data }) {
  return (
    <SiteWrapper>
      <title>Kiralık | Çakraz Emlak</title>
      <Layout>
        <Container maxWidth="container.xl" pb="8">
          <Heading textAlign="center" my="12" fontWeight="medium">
            Kiralık
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
      filter: { published: { eq: true }, type: { eq: "kiralik" } }
    ) {
      nodes {
        ...Advert
      }
    }
  }
`;

export default Rent;
