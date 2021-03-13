import React from "react";
import { Box, Divider, Grid, Heading, Stack, Text } from "@chakra-ui/layout";

function AdvertInfo({ advert }) {
  const informations = [
    {
      label: "İlan türü",
      value: advert.type === 'kiralik' ? 'Kiralık' : 'Satılık',
    },
    {
      label: "İlan oluşturma tarihi",
      value: advert.created_at,
    },
    {
      label: "Oda sayısı",
      value: advert.roomcount,
    },
    {
      label: "Banyo sayısı",
      value: advert.bathcount,
    },
    {
      label: "Metrekaresi (Brüt)",
      value: advert.size,
    },
    {
      label: "Eşyalı",
      value: advert.furnished ? "Evet" : "Hayır",
    },
    {
      label: "Bina yaşı",
      value: advert.age,
    },
    {
      label: "Site içerisinde",
      value: advert.incomplex,
    },
    {
      label: "Kat sayısı",
      value: advert.floorcount,
    },
    {
      label: "Bulunduğu kat",
      value: advert.floorcurrent,
    },
    {
      label: "Kullanım durumu",
      value: advert.status,
    },
    {
      label: "Isıtma",
      value: advert.heating,
    },
  ];

  return (
    <Box padding="8" background="white" boxShadow="sm" mt="8">
      <Heading as="strong" size="md">İlan Bilgileri</Heading>
      <Divider mt="4" mb="8" />
      <Grid templateColumns={{ base: "1fr", md :"repeat(2, 1fr)" }} gap="4">
        {informations.map((info) => (
          <Stack direction="row" spacing="4" key={info.label}>
            <Text>{info.label}:</Text>
            <Text fontWeight="medium">{info.value}</Text>
          </Stack>
        ))}
      </Grid>
    </Box>
  );
}

export default AdvertInfo
