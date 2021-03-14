import * as React from "react";
import { Link as RouterLink } from "gatsby";
import SiteWrapper from "../chakra";
import Layout from "../components/layout/layout";
import { Button, Container, Heading, Text } from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";
import { Helmet } from 'react-helmet';

const NotFoundPage = () => {
  return (
    <SiteWrapper>
      <Helmet title="Sayfa bulunamadı | Çakraz Emlak" />
      <Layout>
        <Container
          maxWidth="container.xl"
          py="56"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading size="4xl">404</Heading>
          <Text fontSize="xl" color="GrayText">
            Sayfa bulunamadı
          </Text>
          <Button as={RouterLink} to="/" leftIcon={<FiArrowLeft />} mt="8">
            Geri Dön
          </Button>
        </Container>
      </Layout>
    </SiteWrapper>
  );
};

export default NotFoundPage;
