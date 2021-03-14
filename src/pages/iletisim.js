import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Box, Container, Flex, Stack, StackDivider, Text } from "@chakra-ui/layout";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import SiteWrapper from "../chakra";
import Layout from "../components/layout/layout";
import Title from "../components/layout/title";
import Hero from "../components/layout/hero";
import { Helmet } from 'react-helmet';

function ContactPage() {
  const { homepage } = useStaticQuery(graphql`
    {
      homepage: strapiHomepage {
        heroimg {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        full_address
        phone
        email
        keywords
      }
    }
  `);

  return (
    <SiteWrapper>
      <Helmet title="İletişim | Çakraz Emlak">
        <meta name="description" content={`Çakraz Emlak İletişim, Telefon: ${homepage.phone}, Adres: ${homepage.full_address}, E-Mail: ${homepage.email}`} />
        <meta name="keywords" content={homepage.keywords} />
      </Helmet>
      <Layout>
        <Hero image={homepage.heroimg} />
        <Container maxWidth="container.xl" pb="8" position="relative">
          <Box
            background="white"
            boxShadow="sm"
            mt={{ base: "-56", md: "-16" }}
            borderRadius="md"
            paddingX="8"
            paddingY="4"
            paddingBottom="12"
          >
            <Title>İletişim</Title>
            <Flex
              alignItems="center"
              justifyContent="space-around"
              direction={{ base: "column", lg: "row" }}
            >
              <Box
                width="100%"
                height="450px"
                as="iframe"
                boxShadow="sm"
                borderRadius="md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23857.599433129722!2d32.32060738008372!3d41.629809748901444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409b72335ea8fb4d%3A0x7820a074d3b17daf!2zQmFydMSxbiwgQmFydMSxbiBNZXJrZXovQmFydMSxbg!5e0!3m2!1str!2str!4v1615673990782!5m2!1str!2str"
                loading="lazy"
              />
              <Stack mt={{ base: "8", lg: "0" }} ml={{ base: "0", lg: "12" }} spacing="4" divider={<StackDivider />}>
                <Stack alignItems="flex-start" spacing="2" fontSize="sm">
                  <Stack direction="row" spacing="2" alignItems="center" color="whatsapp.400">
                    <FiPhone fontSize="1.2rem" /> <Text color="black">Telefon</Text>
                  </Stack>
                  <Text fontSize="xl">{homepage.phone}</Text>
                </Stack>
                <Stack alignItems="flex-start" spacing="2" fontSize="sm">
                  <Stack direction="row" spacing="2" alignItems="center" color="whatsapp.400">
                    <FiMail fontSize="1.2rem" /> <Text color="black">E-Mail</Text>
                  </Stack>
                  <Text fontSize="xl">{homepage.email}</Text>
                </Stack>
                <Stack alignItems="flex-start" spacing="2" fontSize="sm">
                  <Stack direction="row" spacing="2" alignItems="center" color="whatsapp.400">
                    <FiMapPin fontSize="1.2rem" /> <Text color="black">Adres</Text>
                  </Stack>
                  <Text fontSize="xl">{homepage.full_address}</Text>
                </Stack>

              </Stack>
            </Flex>
          </Box>
        </Container>
      </Layout>
    </SiteWrapper>
  );
}

export default ContactPage;
