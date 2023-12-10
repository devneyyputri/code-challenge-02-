import { Box, Center, Heading, Container, Flex } from "@chakra-ui/react"
import Image from "next/image";

export default function Hero() {
    return (
      <Center>
       <Flex>
      <Box height={"200px"} bg={"beige"}>
        <Container>
         <Heading className="font-mono font-large" fontSize='4vw' color='brown' as={"h1"}> Coco&apos;s Cakery </Heading>
        
        <Flex>
         <Image 
         src="/coco's maskot.png"
         width={100}
         height={200}
         alt="maskot coco"
         />
         </Flex>
        
             <p className="font-mono font-small" color='#C05621' as={"h4"} > the best baked goods you&apos;ll ever taste! </p>
            
          </Container>
        </Box>
        </Flex>
        </Center> 
    );
  }
