/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Text,
  Box,
  Image,
  Link,
} from "@chakra-ui/react";
import {BsFillCartDashFill} from "react-icons/bs";


function parseCurrency(value){
  return value.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });
}


const CartDrawer = ({cart}) => {
 
  const {isOpen, onOpen, onClose} = useDisclosure();
  const btnRef = React.useRef();

  const text = React.useMemo(
    () =>
      cart
        .reduce(
          (message, product) =>
            message.concat(`* ${product.title} - ${parseCurrency(product.price)}\n`),
          ``,
        )
        .concat(
          `\nTotal: ${parseCurrency(cart.reduce((total, product) => total + product.price, 0))}`,
        ),
    [cart],
  );

  return (
    <section>
      <Button
        ref={btnRef}
        colorScheme="green"
        display="flex"
        justifyContent="space-evenly"
        padding={4}
        onClick={onOpen}
      >
        <Text>Cart</Text>
        <BsFillCartDashFill />
      </Button>
      <Drawer finalFocusRef={btnRef} isOpen={isOpen} placement="right" size="md" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart</DrawerHeader>

          <DrawerBody>

            
           {cart.map((product)=> (
           
          <Box key={product.title} alignItems="center" display="flex" flexDirection="column" padding={6}>
            <Image
                  borderRightRadius="md"
                  layoutId={product.image}
                  src={product.image}
                  width={250}
                 
                />
          <Text color={"#25C97C"} fontSize={20}>
           {product.title}
         </Text>
         <Text fontSize={15}>{product.description}</Text>
         <Text fontSize={20} fontWeight="500">
           {parseCurrency(product.price)}
         </Text>
          </Box>
        

           ))}
          </DrawerBody>

          <DrawerFooter>
            
            <Button
                isExternal
                as={Link}
                colorScheme="whatsapp"
                href={`https://wa.me/3516989361?text=${encodeURIComponent(text)}`}
                leftIcon={
                  <Image src="https://icongr.am/fontawesome/whatsapp.svg?size=32&color=#ffffff" />
                }
                size="lg"
                width="fit-content"
              >
                Completar pedido ({cart.length} productos)
              </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </section>
  );
};

export default CartDrawer;
