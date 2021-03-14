import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import SiteWrapper from "../chakra";
import Hero from "../components/layout/hero";
import { Box, Container, Text } from "@chakra-ui/react";
import Title from '../components/layout/title';
import { Helmet } from 'react-helmet';

function Page({ data }) {
  return (
    <SiteWrapper>
      <Helmet title={`${data.page.title} | Çakraz Emlak`}>
        <meta name="description" content={`${data.page.title}, Çakraz Emlak`} />
        <meta name="keywords" content={[data.page.title, 'çakraz', 'emlak', 'çakraz emlak']} />
      </Helmet>
      <Layout>
        <Hero image={data.page.heroimg} />
        <Container maxWidth="container.xl" pb="8" position="relative">
          <Box background="white" boxShadow="sm" mt={{ base: "-56", md: "-16" }} borderRadius="md" paddingX="8" paddingY="4" paddingBottom="12">
            <Title>{data.page.title}</Title>
            <Text>{data.page.description}</Text>
          </Box>
        </Container>
      </Layout>
    </SiteWrapper>
  );
}

export const query = graphql`
  query PageTemplate($id: String!) {
    page: strapiPages(id: { eq: $id }) {
      slug
      title
      description
      heroimg {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
export default Page;
