import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Link,
  Stack,
  Badge,
} from "@chakra-ui/react";
import { FiMapPin } from "react-icons/fi";
import { Link as RouterLink } from "gatsby";
import GatsbyImage from "gatsby-image";

function AdvertCard({ advert }) {
  return (
    <Flex
      direction="column"
      borderRadius="md"
      boxShadow="sm"
      padding="4"
      background="white"
      minHeight="380px"
    >
      <Link as={RouterLink} to={`/${advert.type}/${advert.slug}`}>
        <Box position="relative" background="#000" borderRadius="lg">
          <Image
            as={GatsbyImage}
            fluid={advert.thumbnail.small.fluid}
            borderRadius="md"
            transition="150ms ease-out"
            _hover={{ opacity: 0.8 }}
          />
          <Stack position="absolute" top="2" right="2">
            <Badge background="blackAlpha.500" color="white">{advert.created_at}</Badge>
            <Badge colorScheme="whatsapp" textAlign="center">
              {advert.type}
            </Badge>
          </Stack>
        </Box>
      </Link>
      <Text
        mt="4"
        mb="1"
        display="flex"
        alignItems="center"
        color="gray.500"
        fontWeight="medium"
        letterSpacing="wide"
        fontSize="xs"
        textTransform="uppercase"
      >
        {advert.roomcount} &bull; {advert.size}
        {advert.highlight && (
          <Badge colorScheme="whatsapp" ml="2" fontSize="xx-small">
            Öne çıkan
          </Badge>
        )}
      </Text>
      <Heading size="md" as="strong" fontWeight="medium" noOfLines="1">
        <Link
          as={RouterLink}
          to={`/${advert.type}/${advert.slug}`}
          title={advert.title}
          _hover={{ textDecoration: "none" }}
        >
          {advert.title}
        </Link>
      </Heading>
      <Flex justifyContent="space-between" alignItems="center" mt="auto">
        <Stack direction="row" spacing="2" alignItems="center">
          <FiMapPin /> <Text>{advert.location}</Text>
        </Stack>
        <Text color="whatsapp.500" fontWeight="medium" fontSize="xl">
          {advert.price}
        </Text>
      </Flex>
    </Flex>
  );
}

export default AdvertCard;
