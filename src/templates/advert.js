import React from "react";
import { graphql } from "gatsby";
import SiteWrapper from '../chakra';
import Layout from '../components/layout/layout';
import { Container, Heading } from '@chakra-ui/react';

function Advert({ data }) {
  return (
    <SiteWrapper>
      <title>{data.strapiAdverts.title} | Çakraz Emlak</title>
      <Layout>
        <Container maxWidth="container.xl">
          <Heading>{data.strapiAdverts.title}</Heading>
        </Container>
      </Layout>
    </SiteWrapper>
  )
}

export const query = graphql`
  query AdvertTemplate($id: String!) {
    strapiAdverts(id: { eq: $id }) {
      ...Advert
    }
  }
`
export default Advert;
