import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link as RouterLink } from "gatsby";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Img from "gatsby-image";

function Footer({ logo }) {
  const [isDesktop] = useMediaQuery("(min-width: 48em)");
  return (
    <Box as="footer" py="8" background="white" boxShadow="sm" mt="auto">
      <Container maxWidth="container.xl">
        <Flex justifyContent={{ base: "center", md: "space-between" }} alignItems="center">
          <Link as={RouterLink} to="/">
            <Img fixed={logo} />
          </Link>
          {isDesktop && <Stack direction="row" spacing="8">
            <Button
              as="a"
              leftIcon={<FiPhone fontSize="24px" />}
              colorScheme="whatsapp"
              variant="ghost"
              py="8"
              href="tel:05555555555"
            >
              <Stack alignItems="flex-start" ml="4" spacing="0" fontSize="sm">
                <Text fontWeight="normal">Telefon</Text>
                <Text fontWeight="medium">0555 555 55 55</Text>
              </Stack>
            </Button>
            <Button
              leftIcon={<FiMapPin fontSize="24px" />}
              colorScheme="whatsapp"
              variant="ghost"
              py="8"
              as={RouterLink}
              to="/contact"
            >
              <Stack alignItems="flex-start" ml="4" spacing="0" fontSize="sm">
                <Text fontWeight="normal">Konum</Text>
                <Text fontWeight="medium">Bartın, Merkez</Text>
              </Stack>
            </Button>
            <Button
              as="a"
              leftIcon={<FiMail fontSize="24px" />}
              colorScheme="whatsapp"
              variant="ghost"
              py="8"
              href="mailto:info@cakrazemlak.com"
            >
              <Stack alignItems="flex-start" ml="4" spacing="0" fontSize="sm">
                <Text fontWeight="normal">E-Mail</Text>
                <Text fontWeight="medium">info@cakrazemlak.com</Text>
              </Stack>
            </Button>
          </Stack>}
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
