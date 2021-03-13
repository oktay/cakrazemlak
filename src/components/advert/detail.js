import React from "react";
import { Box, Flex, Stack, Heading, Text } from "@chakra-ui/react";
import { FiMapPin } from "react-icons/fi";
import AdvertCarousel from '../advert-detail/carousel';

function AdvertDetail({ advert }) {
  return (
    <Box paddingY="8">
      <Flex justifyContent="space-between">
        <Stack spacing="2">
          <Heading>{advert.title}</Heading>
          <Stack direction="row" spacing="2" alignItems="center">
            <FiMapPin /> <Text>{advert.location}</Text>
          </Stack>
        </Stack>
        <Text color="whatsapp.500" fontWeight="medium" fontSize="2xl">
          {advert.price}
        </Text>
      </Flex>
      <AdvertCarousel advert={advert} />
    </Box>
  );
}

export default AdvertDetail;
