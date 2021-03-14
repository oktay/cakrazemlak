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

        <meta property="og:url" content="https://cakrazemlak.vercel.app/satilik" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Satılık | Çakraz Emlak" />
        <meta property="og:description" content="Satılık ilanlar, Çakraz Emlak" />
        <meta property="og:image" content={data.logo.publicURL} />

        <meta name="twitter:card"  content={data.logo.publicURL} />
        <meta property="twitter:domain" content="https://cakrazemlak.vercel.app" />
        <meta property="twitter:url" content="https://cakrazemlak.vercel.app/satilik" />
        <meta name="twitter:title" content="Satılık | Çakraz Emlak" />
        <meta name="twitter:description"content="Satılık ilanlar, Çakraz Emlak" />
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
    logo: file(
      relativePath: { eq: "icon.png" }
      sourceInstanceName: { eq: "images" }
    ) {
      publicURL
    }
  }
`;

export default Sale;
