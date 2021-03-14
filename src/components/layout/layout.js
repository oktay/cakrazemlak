import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Box } from "@chakra-ui/react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Helmet } from 'react-helmet';

function Layout({ children }) {
  const { logo, logoGrayScale, info } = useStaticQuery(graphql`
    {
      logo: file(
        relativePath: { eq: "icon.png" }
        sourceInstanceName: { eq: "images" }
      ) {
        id
        publicURL
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
          fixed(
            width: 85
            duotone: { highlight: "#cccccc", shadow: "#cccccc" }
          ) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      info: strapiHomepage {
        email
        phone
        location
      }
    }
  `);

  return (
    <Box
      background="#fcfbfb"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
    >
      <Helmet>
        <link rel="shortcut icon" href={logo.publicURL} type="image/x-icon"/>
      </Helmet>
      <Header logo={logo.childImageSharp.fixed} />
      {children}
      <Footer logo={logoGrayScale.childImageSharp.fixed} info={info} />
    </Box>
  );
}

export default Layout;
