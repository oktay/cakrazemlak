import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Box } from "@chakra-ui/react";
import Header from "../header/header";
import Footer from "../footer/footer";

function Layout({ children }) {
  const { file } = useStaticQuery(graphql`
    {
      file(
        relativePath: { eq: "icon.png" }
        sourceInstanceName: { eq: "images" }
      ) {
        id
        childImageSharp {
          fixed(width: 85) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <Box background="gray.50" minHeight="100vh" display="flex" flexDirection="column">
      <Header logo={file.childImageSharp.fixed} />
      {children}
      <Footer logo={file.childImageSharp.fixed} />
    </Box>
  );
}

export default Layout;
