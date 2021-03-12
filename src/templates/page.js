import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import SiteWrapper from "../chakra";
import Hero from "../components/layout/hero";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

function Page({ data }) {
  return (
    <SiteWrapper>
      <title>{data.strapiPages.title} | Çakraz Emlak</title>
      <Layout>
        <Hero image={data.strapiPages.heroimg} />
        <Container maxWidth="container.xl" pb="8" position="relative">
          <Box background="white" boxShadow="sm" mt={{ base: "-56", md: "-16" }} borderRadius="md" paddingX="8" paddingY="4" paddingBottom="12">
            <Heading textAlign="center" my="8" fontWeight="medium">{data.strapiPages.title}</Heading>
            <Text>{data.strapiPages.description}</Text>
          </Box>
        </Container>
      </Layout>
    </SiteWrapper>
  );
}

export const query = graphql`
  query PageTemplate($id: String!) {
    strapiPages(id: { eq: $id }) {
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
