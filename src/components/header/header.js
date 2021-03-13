import React, { useRef } from "react";
import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
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
  const ref = useRef();

  return (
    <Box as="header" py="4" background="white" boxShadow="sm">
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
              icon={<FiMenu />}
              onClick={onOpen}
            >
              Open Menu
            </IconButton>
          )}
        </Flex>
      </Container>
      <Drawer placement="top" isOpen={isOpen} onClose={onClose} initialFocusRef={ref}>
        <DrawerOverlay zIndex="popover">
          <DrawerContent borderBottomRadius="8" zIndex="popover">
            <DrawerHeader display="flex" justifyContent="space-between" alignItems="center" padding="1rem">
              <Link as={RouterLink} to="/">
                <Img fixed={logo} />
              </Link>
              <IconButton size="lg" fontSize="2xl" icon={<FiX />} colorScheme="whatsapp" variant="ghost" onClick={onClose} ref={ref} />
            </DrawerHeader>
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
