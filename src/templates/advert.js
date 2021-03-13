import React from "react";
import { graphql } from "gatsby";
import { Container } from '@chakra-ui/react';
import SiteWrapper from '../chakra';
import Layout from '../components/layout/layout';
import AdvertDetail from '../components/advert/detail';

function Advert({ data }) {
  return (
    <SiteWrapper>
      <title>{data.advert.title} | Çakraz Emlak</title>
      <Layout>
        <Container maxWidth="container.xl">
          <AdvertDetail advert={data.advert} />
        </Container>
      </Layout>
    </SiteWrapper>
  )
}

export const query = graphql`
  query AdvertTemplate($id: String!) {
    advert: strapiAdverts(id: { eq: $id }) {
      ...Advert
    }
  }
`
export default Advert;
