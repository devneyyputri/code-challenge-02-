"use client";
import { Box, Center, Heading, Flex, Container, Stack } from "@chakra-ui/react"
import Image from "next/image";

export default function Hero() {
    return (
      <Center>
      
      <Container w={"105%"} m={"1%"} bg={"beige"} borderColor={"red"} border={"30px"} >
       
       
        <Heading marginLeft={360} marginRight={100} className="font-mono font-large" fontSize='3vw' color='brown' as={"h1"}> Coco&apos;s Cakery </Heading>
        <Box marginLeft={360} marginRight={100}>
        <Stack direction='row' >
        <Image marginLeft={360} marginRight={100} 
         src="/coco's maskot.png"
         width={150}
         height={200}
         alt="maskot coco"
         />
         </Stack>
        <Flex>
        <h1 marginLeft={360} marginRight={100} color="yellow" className="font-mono font-small" > 
         the best baked goods you&apos;ll ever taste! 
        </h1>
        </Flex>
        </Box>
        </Container>
        
        
      
    </Center>
    );
  }
