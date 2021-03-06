import React, { useRef, useState } from "react";
import { Box, Button, Heading, Stack, useMediaQuery, useToast } from "@chakra-ui/react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import AdvertList from "../advert/list";

function Searchbox({ adverts }) {
  const data = useStaticQuery(graphql`
    {
      kiralik: allStrapiAdverts(
        filter: { published: { eq: true }, type: { eq: "kiralik" } }
      ) {
        group(field: location) {
          fieldValue
        }
      }
      satilik: allStrapiAdverts(
        filter: { published: { eq: true }, type: { eq: "satilik" } }
      ) {
        group(field: location) {
          fieldValue
        }
      }
    }
  `);

  const [type, setType] = useState("kiralik");
  const [filteredAdverts, setFilteredAdverts] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isDesktop] = useMediaQuery("(min-width: 80em)")
  const toast = useToast();
  const resultsRef = useRef(null);

  function handleSubmit(event) {
    const [type, location] = event.target;

    if (!type.value || !location.value) {
      setShowResults(false);
    } else {
      const result = adverts.filter((advert) => {
        const typeMatch = advert.type === type.value;
        const locationMatch = advert.location === location.value;
        return typeMatch && locationMatch;
      });

      setFilteredAdverts(result);
      setShowResults(true);
      setTimeout(() => {
        resultsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 0);
    }

    event.preventDefault();
  }

  function handleClear() {
    setShowResults(false);
    setTimeout(() => {
      document.body.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
    toast({
      title: "Sonuçlar temizlendi",
      status: "success",
      duration: 1000,
      isClosable: true,
      position: isDesktop ? "top-right" : "bottom"
    });
  }

  return (
    <Box ref={resultsRef}>
      <Box
        background="white"
        boxShadow="sm"
        padding="8"
        position="relative"
        borderRadius="md"
      >
        <Stack
          as="form"
          direction={{ base: "column", md: "row" }}
          alignItems="flex-end"
          spacing="4"
          onSubmit={handleSubmit}
        >
          <FormControl id="type">
            <FormLabel>Tür</FormLabel>
            <Select
              focusBorderColor="whatsapp.400"
              icon={<FiChevronDown />}
              size="lg"
              onChange={(event) => setType(event.target.value)}
            >
              <option value="kiralik">Kiralık</option>
              <option value="satilik">Satılık</option>
            </Select>
          </FormControl>
          <FormControl id="location">
            <FormLabel>Konum</FormLabel>
            <Select
              focusBorderColor="whatsapp.400"
              icon={<FiChevronDown />}
              size="lg"
              placeholder="Konum"
            >
              {data[type].group.map((group) => (
                <option key={group.fieldValue} value={group.fieldValue}>
                  {group.fieldValue}
                </option>
              ))}
            </Select>
          </FormControl>
          <Button
            size="lg"
            colorScheme="whatsapp"
            maxWidth={{ base: "100%", md: "36" }}
            isFullWidth
            type="submit"
          >
            Ara
          </Button>
        </Stack>
      </Box>

      {showResults && (
        <Box>
          {filteredAdverts.length ? (
            <Box>
              <Heading textAlign="center" my="12" fontWeight="medium">
                Sonuçlar
              </Heading>
              <AdvertList adverts={filteredAdverts} />
              <Button
                my="8"
                mx="auto"
                display="flex"
                size="lg"
                colorScheme="green"
                variant="outline"
                minWidth="36"
                onClick={() => handleClear()}
                rightIcon={<FiChevronUp />}
              >
                Sonuçları temizle
              </Button>
            </Box>
          ) : (
            <Heading fontWeight="medium">Sonuç yok</Heading>
          )}
        </Box>
      )}
    </Box>
  );
}

export default Searchbox;
