"use client";
import { Box, Center, Heading, Flex, Container } from "@chakra-ui/react"
import Image from "next/image";

export default function Hero() {
    return (
      <Center>
      
    
      <Box w={"95%"} m={"2%"} borderColor={"brown"} border={"6px"} bg={"beige"}>
       
        
         <Heading className="font-mono font-large" fontSize='3vw' color='brown' as={"h1"}> Coco&apos;s Cakery </Heading>
         <Image 
         src="/coco's maskot.png"
         width={100}
         height={200}
         alt="maskot coco"
         />
         <text noOfLines={1} className="font-mono font-small" color='#brown'> 
         the best baked goods you&apos;ll ever taste! 
         </text>
          
          
        </Box>
        
        
      
    </Center>
    );
  }
