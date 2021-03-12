import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

function SiteWrapper({ children }) {
  return <ChakraProvider resetCSS>{children}</ChakraProvider>;
}

export default SiteWrapper;
