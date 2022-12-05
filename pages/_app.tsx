import React from "react";
import {ChakraProvider, Text, Image, Container, Stack, Box, Divider} from "@chakra-ui/react";
import {AppProps} from "next/app";

import AcordionSection from "../acordion/AcordionSection.jsx";
import TabsSection from "../TabsSection/TabsSection.jsx";
import theme from "../theme";

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <ChakraProvider theme={theme}>
      <Box padding={4}>
        <Container
          borderRadius="sm"
          boxShadow="xl"
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
            <Image alt="logo" borderRadius={7} boxSize="200px" src="/logo.jpg" width="200px" />
          </Stack>
          <Box id="home">
            <Text
              color="#FFE32C"
              fontFamily="fantasy"
              fontSize="5xl"
              marginBottom={6}
              textAlign="center"
            >
              Proba Nuestra Variedad de Lomos y Hamburguesas
            </Text>
            <Image alt="hero" src="./hambur-product.png" />
            <Divider borderColor="#FFE32C" marginY={6} />
            <Image alt="hero" src="./banner-whatsapp.jpg" />
          </Box>

          <Divider borderColor="#FFE32C" id="shop" marginY={6} />

          <Component {...pageProps} />
          <TabsSection />

          <AcordionSection />
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default App;
