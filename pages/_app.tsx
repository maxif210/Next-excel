import React from "react";
import {ChakraProvider, Text, Image, Container, Stack, Box, Divider} from "@chakra-ui/react";
import {AppProps} from "next/app";

import AcordionSection from "../acordion/AcordionSection.jsx";
import theme from "../theme";

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <ChakraProvider theme={theme}>
      <Box padding={4}>
        <Container
          borderRadius="sm"
          boxShadow="md"
          color="white"
          maxWidth="container.xl"
          padding={4}
        >
          <Stack
            alignItems="center"
            backgroundColor="#252525"
            borderRadius={7}
            marginBottom={6}
            padding={5}
          >
            <Image alt="logo" borderRadius={7} boxSize="150px" src="/logo.png" width="150px" />
          </Stack>
          <Box id="home">
            <Text
              color="#25C97C"
              fontFamily="fantasy"
              fontSize="5xl"
              marginBottom={6}
              textAlign="center"
            >
              Proba Nuestra Variedad de Lomos y Hamburguesas
            </Text>
            <Image alt="hero" src="./hambur-product.png" />
            <Divider borderColor="#25C97C" marginY={6} />
            <Image alt="hero" src="./banner-whatsapp.png" />
          </Box>

          <Divider borderColor="#25C97C" id="shop" marginY={6} />

          <Component {...pageProps} />
        </Container>

        <AcordionSection />
      </Box>
    </ChakraProvider>
  );
};

export default App;
