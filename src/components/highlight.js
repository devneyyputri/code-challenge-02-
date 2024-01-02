"use client";
import { Box, Center, Flex, Text, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { Heading } from "@chakra-ui/react";

export default function Highlight() {
    return (
      <Flex maxWidth='max-content' alignItems='center' gap='2'>
      <Box p={4}>
        <Center>
        <Stack direction='row'>
         <Image
          boxSize='100px'
         src="/cake.png"
         width={220}
         height={210}
         alt="cake"
         />
         <Image
         boxSize='100px'
         src="/store.png"
         width={260}
         height={260}
         alt="store"
         />
         <Image boxSize='200px'/>
         </Stack>
         </Center>
         
        <Center>
        <section className="highlight">
          <div className="desc-text">
            <Heading color='#DD6B20' textAlign={"center"} style={{fontSize:"4vw"}}>
              Welcome to Coco&apos;s Cakery
            </Heading>
            <div>
            <Text color={"darkgrey"} textAlign={"relative"}>
             Where Every Bite is a Celebration!
             Indulge in the sweet symphony of flavors at Coco&apos;s Cakery
             Step into our whimsical world of sugar and flour 
             where the aroma of freshly baked treats welcomes you with open arms. 
             Our cakery is a haven for dessert enthusiasts, 
             a place where the art of baking is elevated to new heights.
             Each day, our talented team of pastry artisans dedicates themselves 
             to creating masterpieces that are as visually stunning as they are delicious.
            </Text>
            </div>
          </div>
        </section>
        </Center>
        </Box>
        </Flex>
      );
}