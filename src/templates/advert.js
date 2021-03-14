import React from "react";
import { graphql } from "gatsby";
import { Container } from '@chakra-ui/react';
import SiteWrapper from '../chakra';
import Layout from '../components/layout/layout';
import AdvertDetail from '../components/advert-detail/detail';
import { Helmet } from 'react-helmet';

function Advert({ data }) {
  return (
    <SiteWrapper>
      <Helmet title={`${data.advert.title} | Çakraz Emlak`}>
        <meta name="description" content={data.advert.description ? data.advert.description : `Çakraz Emlak, ${data.advert.title}`} />
        <meta name="keywords" content={[data.advert.type === 'kiralik' ? 'Kiralık' : 'Satılık', data.advert.location, data.advert.title]} />

        <meta property="og:url" content={`https://cakrazemlak.vercel.app/${data.advert.type}/${data.advert.slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${data.advert.title} | Çakraz Emlak`} />
        <meta property="og:description" content={data.advert.description ? data.advert.description : `Çakraz Emlak, ${data.advert.title}`} />
        <meta property="og:image" content={data.advert.thumbnail.publicURL} />

        <meta name="twitter:card" content={data.advert.thumbnail.publicURL} />
        <meta property="twitter:domain" content="https://cakrazemlak.vercel.app" />
        <meta property="twitter:url" content={`https://cakrazemlak.vercel.app/${data.advert.type}/${data.advert.slug}`} />
        <meta name="twitter:title" content={data.advert.title} />
        <meta name="twitter:description" content={data.advert.description ? data.advert.description : `Çakraz Emlak, ${data.advert.title}`} />
      </Helmet>
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
