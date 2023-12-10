import { Box, Center, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { Heading } from "@chakra-ui/react";

export default function Highlight() {
    return (
      <Flex minWidth='max-content' alignItems='center' gap='7'>
      
      <Box>
        <Center>
         
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
         src="/home1.png"
         width={220}
         height={200}
         alt="home1"
         />
         </Center>
        <Center>
        <section className="highlight">
          <div className="desc-text">
            <Heading color='#9C4221' textAlign={"center"} style={{fontSize:"4vw"}}>
              Welcome to Coco&apos;s Cakery
              </Heading>
            <p>
             Where Every Bite is a Celebration!
             Indulge in the sweet symphony of flavors at Coco&apos;s Cakery
            </p>
          </div>
        </section>
        </Center>
        </Box>
        </Flex>
      );
}