import React from "react";
import {GetStaticProps} from "next";
import {Button, Flex, Grid, Box, Link, Stack, Image, Text} from "@chakra-ui/react";
import {motion, AnimatePresence, AnimateSharedLayout} from "framer-motion";

import CartDrawer from "../cart/CartDrawer.jsx";
import {Product} from "../product/types";
import api from "../product/api";

interface Props {
  products: Product[];
}

function parseCurrency(value: number): string {
  return value.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });
}

const IndexRoute: React.FC<Props> = ({products}) => {
  const [cart, setCart] = React.useState<Product[]>([]);
  const [selectedImage, setSelectedImage] = React.useState<string>(null);
  const [selectedText, setSelectedText] = React.useState<string>(null);
  const [selectedPrice, setSelectedPrice] = React.useState<number>(null);

  return (
    <AnimateSharedLayout type="crossfade">
      <Stack spacing={6}>
        <Grid gridGap={6} templateColumns="repeat(auto-fill, minmax(240px, 1fr))">
          {products.map((product) => (
            <Stack
              key={product.id}
              alignItems="center"
              backgroundColor="#252525"
              borderRadius="md"
              display="flex"
              gap="1rem"
              maxHeight="375px"
              padding={4}
              spacing={3}
            >
              <Stack spacing={1}>
                <Image
                  as={motion.img}
                  borderRightRadius="md"
                  cursor="pointer"
                  layoutId={product.image}
                  src={product.image}
                  width={250}
                  onClick={() => {
                    setSelectedImage(product.image);
                    setSelectedText(product.title);
                    setSelectedPrice(product.price);
                  }}
                />
                <Box alignItems="center" display="flex" flexDirection="column">
                  <Text color={"#FFE32C"} fontSize={20}>
                    {product.title}
                  </Text>
                  <Text fontSize={15}>{product.description}</Text>
                  <Text color="white" fontSize="2xl" fontWeight="600">
                    {parseCurrency(product.price)}
                  </Text>
                </Box>
              </Stack>
              <Button
                color="black"
                colorScheme="primary"
                size="md"
                onClick={() => setCart((cart) => cart.concat(product))}
              >
                Agregar
              </Button>
            </Stack>
          ))}
        </Grid>
        <AnimatePresence>
          {Boolean(cart.length) && (
            <Flex
              alignItems="center"
              animate={{scale: 1}}
              as={motion.div}
              bottom={4}
              exit={{scale: 0}}
              initial={{scale: 0}}
              justifyContent="center"
              position="sticky"
            >
              <CartDrawer cart={cart} />
            </Flex>
          )}
        </AnimatePresence>
      </Stack>
      <AnimatePresence>
        {selectedImage && (
          <Box blur="102px" filter="auto">
            <Flex
              key="backdrop"
              alignItems="center"
              as={motion.div}
              backgroundColor="rgba(0,0,0,0.8)"
              height="100%"
              justifyContent="center"
              layoutId={selectedImage}
              left={0}
              position="fixed"
              top={0}
              width="100%"
              onClick={() => setSelectedImage(null)}
            >
              <Stack>
                <Text color={"#FFE32C"} fontFamily="monospace" fontSize="3xl" padding={6}>
                  {selectedText}
                </Text>
                <Text color={"white"} fontFamily="monospace" fontSize="3xl" padding={6}>
                  ${selectedPrice}
                </Text>
              </Stack>
              <Image key="image" src={selectedImage} />
            </Flex>
          </Box>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await api.list();

  return {
    revalidate: 10,
    props: {
      products,
    },
  };
};

export default IndexRoute;
