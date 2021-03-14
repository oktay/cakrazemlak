import React from "react";
import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Link,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link as RouterLink } from "@reach/router";
import { FiMenu, FiX } from "react-icons/fi";
import Img from "gatsby-image";
import Navigation from "./navigation";

function Header({ logo }) {
  const [isDesktop] = useMediaQuery("(min-width: 48em)");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header" py="4" background="white" boxShadow="sm" position={{ base: "sticky", md: "static" }} top="0" zIndex="sticky">
      <Container maxWidth="container.xl">
        <Flex justifyContent="space-between" alignItems="center">
          <Link as={RouterLink} to="/">
            <Img fixed={logo} />
          </Link>
          {isDesktop && <Navigation />}
          {!isDesktop && (
            <IconButton
              colorScheme="whatsapp"
              size="lg"
              fontSize="2xl"
              variant="ghost"
              icon={isOpen ? <FiX /> : <FiMenu />}
              onClick={isOpen ? onClose : onOpen}
              aria-label="Menüyü aç"
            />
          )}
        </Flex>
      </Container>
      <Drawer placement="top" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay zIndex="sticky">
          <DrawerContent borderBottomRadius="8" zIndex="sticky" paddingTop="28">
            <DrawerBody paddingBottom="8" paddingX="1rem">
              <Navigation />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}

export default Header;
