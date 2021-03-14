import * as React from "react";
import { graphql } from "gatsby";
import { Container } from "@chakra-ui/react";
import SiteWrapper from "../chakra";
import Layout from "../components/layout/layout";
import Hero from "../components/layout/hero";
import AdvertList from "../components/advert/list";
import Searchbox from '../components/search/searchbox';
import Title from '../components/layout/title';
import { Helmet } from 'react-helmet';

const IndexPage = ({ data }) => {
  const highlights = data.adverts.nodes.filter(
    (advert) => advert.highlight
  );
  return (
    <SiteWrapper>
      <Helmet title="Anasayfa | Çakraz Emlak">
        <meta name="description" content={data.homepage.description} />
        <meta name="keywords" content={data.homepage.keywords} />

        <meta property="og:url" content="https://cakrazemlak.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Anasayfa | Çakraz Emlak" />
        <meta property="og:description" content={data.homepage.description} />
        <meta property="og:image" content={data.logo.publicURL} />

        <meta name="twitter:card"  content={data.logo.publicURL} />
        <meta property="twitter:domain" content="https://cakrazemlak.vercel.app" />
        <meta property="twitter:url" content="https://cakrazemlak.vercel.app/" />
        <meta name="twitter:title" content="Anasayfa | Çakraz Emlak" />
        <meta name="twitter:description" content={data.homepage.description} />
      </Helmet>
      <Layout>
        <Hero image={data.homepage.heroimg} />
        <Container maxWidth="container.xl" mt={{ base: "-56", md:"-16" }} pb="8">
          <Searchbox adverts={data.adverts.nodes} />
          <Title>Öne Çıkan İlanlar</Title>
          <AdvertList adverts={highlights} />
        </Container>
      </Layout>
    </SiteWrapper>
  );
};

export const query = graphql`
  {
    adverts: allStrapiAdverts(filter: { published: { eq: true } }) {
      nodes {
        ...Advert
      }
    }
    homepage : strapiHomepage {
      description
      keywords
      heroimg {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
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

export default IndexPage;
