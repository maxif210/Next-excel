/* eslint-disable prettier/prettier */
import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Image, Box, Text } from '@chakra-ui/react'


const TabsSection = () => {
  return (
    <section>
       <Text
              color="#FFE32C"
              fontFamily="fantasy"
              fontSize="5xl"
              marginBottom={6}
              textAlign="center"
            >
              Promociones
            </Text>
    <Tabs isLazy defaultIndex={1}>
    <TabList>
    <Tab _focus={{borderColor:"black",}} _selected={{
    borderColor:"black",
     color:"black"
    }}color={'white'} fontSize={{ base: '12px', md: 'lg', lg: 'xl' }}>Hamburguesas</Tab>
    <Tab _focus={{borderColor:"black",}} _selected={{
    borderColor:"black",
     color:"black"
    }}color={'white'} fontSize={{ base: '12px', md: 'lg', lg: 'xl' }}>Lomitos</Tab>
    <Tab _focus={{borderColor:"black",}} _selected={{
    borderColor:"black",
     color:"black"
    }}color={'white'} fontSize={{ base: '12px', md: 'lg', lg: 'xl' }}>Empanadas</Tab>
    
    <Tab _focus={{borderColor:"black",}} _selected={{
    borderColor:"black",
     color:"black"
    }}color={'white'} fontSize={{ base: '12px', md: 'lg', lg: 'xl' }}>Pizzas</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Box alignItems={'center'} display="flex" flexWrap= "wrap">
      <Image
        boxSize='400px'
        layout='fill'
        src="./1.png"
      />
       <Box color="#FFE32C" fontSize="5xl" marginLeft={10} textAlign="left" textDecoration={'underline'}>
              $1000
        </Box>
      </Box>
    </TabPanel>
    <TabPanel>
    <Box alignItems={'center'} display="flex" flexWrap= "wrap">
      <Image
        boxSize='400px'
        layout='fill'
        src="./2.png"
      />
       <Box color="#FFE32C" fontSize="5xl" marginLeft={10} textAlign="left" textDecoration={'underline'}>
              $2000
        </Box>
      </Box>
    </TabPanel>
    <TabPanel>
    <Box alignItems={'center'} display="flex" flexWrap= "wrap">
      <Image
        boxSize='400px'
        layout='fill'
        src="./3.png"
      />
       <Box color="#FFE32C" fontSize="5xl" marginLeft={10} textAlign="left" textDecoration={'underline'}>
              $1000
        </Box>
      </Box>
    </TabPanel>
    <TabPanel>
    <Box alignItems={'center'} display="flex" flexWrap= "wrap">
      <Image
        boxSize='400px'
        layout='fill'
        src="./4.png"
      />
       <Box color="#FFE32C" fontSize="5xl" marginLeft={10} textAlign="left" textDecoration={'underline'}>
              $2000
        </Box>
      </Box>
    </TabPanel>
  </TabPanels>
 
</Tabs>
</section>
  )
}

export default TabsSection
