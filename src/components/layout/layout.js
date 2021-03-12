import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Box } from "@chakra-ui/react";
import Header from "../header/header";
import Footer from "../footer/footer";

function Layout({ children }) {
  const { logo, logoGrayScale } = useStaticQuery(graphql`
    {
      logo: file(
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
      logoGrayScale: file(
        relativePath: { eq: "icon.png" }
        sourceInstanceName: { eq: "images" }
      ) {
        id
        childImageSharp {
          fixed(width: 85, grayscale: true) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Box background="#fcfbfb" minHeight="100vh" display="flex" flexDirection="column">
      <Header logo={logo.childImageSharp.fixed} />
      {children}
      <Footer logo={logoGrayScale.childImageSharp.fixed} />
    </Box>
  );
}

export default Layout;
