"use client";
import { Box, Center, Flex, Text, Stack, Container } from "@chakra-ui/react";
import Image from "next/image";
import { Heading } from "@chakra-ui/react";

export default function Highlight() {
    return (
      <Flex maxWidth='max-content' alignItems='center' gap='5'>
      <Box p={4}>
        <Center>
        <Stack direction='row'>
         <Image
        
         src="/cake.png"
         width={220}
         height={210}
         alt="cake"
         />
         <Image
        
         src="/store.png"
         width={260}
         height={260}
         alt="store"
         />
        <Image
        
         src="/strwbbry.png"
         width={260}
         height={260}
         alt="strwbrry"
         />
         {/* <Image boxSize='200px'/> */}
         </Stack>
         </Center>
         
        <Center>
        <section className="highlight">
          <div className="desc-text">
            <Heading color='#9B2C2C' textAlign={"center"} style={{fontSize:"2vw"}}>
              Welcome to Coco&apos;s Cakery
            </Heading>
            <Container maxW='1000px' bg='purple.600' color='white'>
            <Text color={"#4A5568"} textAlign={"relative"} style={{fontSize:"2vw"}} >
             Where Every Bite is a Celebration!
             Indulge in the sweet symphony of flavors at Coco&apos;s Cakery
             Step into our whimsical world of sugar and flour 
             where the aroma of freshly baked treats welcomes you with open arms. 
             Our cakery is a haven for dessert enthusiasts, 
             a place where the art of baking is elevated to new heights.
             Each day, our talented team of pastry artisans dedicates themselves 
             to creating masterpieces that are as visually stunning as they are delicious.
            </Text>
            </Container>
          </div>
        </section>
        </Center>
        </Box>
        </Flex>
      );
}