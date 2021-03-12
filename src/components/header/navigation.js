import React from "react";
import { Button, Stack } from "@chakra-ui/react";
import { graphql, Link as RouterLink, useStaticQuery } from "gatsby";
import { useLocation } from "@reach/router";

function Navigation() {
  const { pages } = useStaticQuery(graphql`
    {
      pages: allStrapiPages(filter: { published: { eq: true } }) {
        nodes {
          slug
          title
        }
      }
    }
  `);

  const LINKS = [
    {
      title: "Anasayfa",
      slug: "",
    },
    {
      title: "Satılık",
      slug: "satilik",
    },
    {
      title: "Kiralık",
      slug: "kiralik",
    },
    ...pages.nodes,
  ];
  
  const location = useLocation();

  return (
    <Stack as="nav" direction={{ base: 'column', md: 'row' }} spacing="4">
      {LINKS.map((link) => (
        <Button
          key={link.slug}
          to={`/${link.slug}`}
          as={RouterLink}
          isActive={location.pathname === `/${link.slug}`}
          variant="ghost"
          colorScheme="whatsapp"
        >
          {link.title}
        </Button>
      ))}
    </Stack>
  );
}

export default Navigation;
