import { Box, Center, Heading, Container, Flex  } from "@chakra-ui/react"
import Image from "next/image";

export default function Hero() {
    return (
      <Box height={"200px"} bg={"beige"}>
        
        <Center>
          
             <Heading className="font-mono font-large" fontSize='4vw' color='brown' as={"h1"}> Coco&apos;s Cakery </Heading>
             <Center>
         <Flex>
         <Image 
         src="/coco's maskot.png"
         width={100}
         height={200}
         alt="maskot coco"
         />
         </Flex>
        </Center>
             <Heading className="font-mono font-small" color='#C05621' as={"h4"} as='cite'> the best baked goods you&apos;ll ever taste! </Heading>
             
          </Container>
        </Center>
        
      </Box>
    );
  }
