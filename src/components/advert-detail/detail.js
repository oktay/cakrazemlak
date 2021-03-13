import React from "react";
import { Box, Flex, Stack, Heading, Text, Badge } from "@chakra-ui/react";
import { FiMapPin } from "react-icons/fi";
import AdvertCarousel from './carousel';

function AdvertDetail({ advert }) {
  return (
    <Box paddingY="8">
      <Flex justifyContent="space-between">
        <Stack spacing="2">
          <Heading>{advert.title}</Heading>
          <Stack direction="row" alignItems="center" spacing="2">
            <Stack direction="row" spacing="2" alignItems="center">
              <FiMapPin style={{ flexShrink: 0 }} /> <Text>{advert.location}</Text>
            </Stack>
            <Badge colorScheme="whatsapp">{advert.type}</Badge>
          </Stack>
        </Stack>
        <Text color="whatsapp.500" fontWeight="medium" fontSize="4xl" alignSelf="flex-end">
          {advert.price}
        </Text>
      </Flex>
      <AdvertCarousel advert={advert} />
    </Box>
  );
}

export default AdvertDetail;
