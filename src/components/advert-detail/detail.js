import React from "react";
import { Box, Stack, Heading, Text, Badge, Divider, Grid } from "@chakra-ui/react";
import { FiMapPin } from "react-icons/fi";
import AdvertCarousel from './carousel';
import AdvertInfo from './info';

function AdvertDetail({ advert }) {
  return (
    <Box paddingY="8">
      <Grid templateColumns="1fr auto">
        <Heading gridColumn={{ base: "span 3" }}>{advert.title}</Heading>
        <Stack direction="row" alignItems="center" spacing="2" gridRow="2">
          <Stack direction="row" spacing="2" alignItems="center">
            <FiMapPin style={{ flexShrink: 0 }} /> <Text fontSize={{ base: "sm", md: "md" }}>{advert.location}</Text>
          </Stack>
          <Badge colorScheme="whatsapp">{advert.type}</Badge>
        </Stack>
        <Text color="whatsapp.500" fontWeight="medium" fontSize={{ base: "2xl", md: "4xl"}} alignSelf="flex-end">
          {advert.price}
        </Text>
      </Grid>
      <AdvertCarousel advert={advert} />
      <AdvertInfo advert={advert} />
      <Box padding="8" background="white" boxShadow="sm" mt="8">
        <Heading as="strong" size="md">İlan Açıklaması</Heading>
        <Divider mt="4" mb="8" />
        <Text>{advert.description}</Text>
      </Box>
    </Box>
  );
}

export default AdvertDetail;
