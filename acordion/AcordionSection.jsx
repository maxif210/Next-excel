/* eslint-disable prettier/prettier */
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';

const AcordionSection = () => {

  
  return (
    <Accordion fontFamily="monospace" marginTop="20">
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box color="#FFE32C" fontSize="2xl" textAlign="left">
              Ubicación
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel color="white" fontSize="md" pb={4}>
        <iframe allowFullScreen="true" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19255.257230141433!2d-64.18023005896288!3d-31.444950016102574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2d84b8115a3%3A0x875174755b664b6b!2sTosno%203073%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1662443317717!5m2!1ses!2sar" width="100%" />
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box color="#FFE32C" fontSize="2xl" textAlign="left">
             Redes Sociales
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel color="white"  pb={4}>
          <Stack  flexDirection="row" justifyContent="space-evenly">
            <Text alignItems="center" display="flex" fontSize="2xl" justifyContent="space-evenly" w="3xs">Instagram <AiFillInstagram /> </Text>
            <Text alignItems="center" display="flex" fontSize="2xl" justifyContent="space-evenly" w="3xs">Facebook <AiFillFacebook /> </Text>
          </Stack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AcordionSection;
