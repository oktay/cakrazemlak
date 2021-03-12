import React from "react";
import { Box, Divider, Heading } from "@chakra-ui/layout";

function Title({ children, width, as }) {
  return (
    <Box>
      <Heading as={as || "h1"} textAlign="center" mt="12" mb="4" fontWeight="medium">
        {children}
      </Heading>
      <Divider
        borderWidth="2px"
        borderColor="whatsapp.500"
        maxWidth={width || "16"}
        mx="auto"
        mb="8"
      />
    </Box>
  );
}

export default Title;
