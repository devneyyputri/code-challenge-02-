import Image from 'next/image'
import { Box, Center, Container, Flex, Heading } from "@chakra-ui/react";
import NavBar from '@/components/NavBar';

export default function Page(props) {
    return (
    <Center> 
    <div>
      
       <h1>
        <Container maxW='1000px' bg='purple.600' color='white' >
        <Flex>
        <Image 
          src="/aboutus.png"
          alt="aboutus"
          width={300}
          height={300}
        /> 
        <hr></hr>
         <Image 
          src="/aboutus2.png"
          alt="aboutus2"
          width={300}
          height={300}
        />  
        <hr></hr>
         <Image 
          src="/aboutus3.png"
          alt="aboutus3"
          width={300}
          height={300}
        /> 
        <Image 
          src="/aboutus4.png"
          alt="aboutus4"
          width={300}
          height={300}
        />
        </Flex>
        </Container> 
        <Box padding={"20px 0"}>
      
        <Container>
          <Center>
          <Heading as={"h1"} marginBottom={"20px"} color="red-900" >
          About Us{" "}
          </Heading>
          </Center>
          <hr style={{ marginBottom: "20px", color: "red-900" }}></hr>
          <p  w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"} style={{ textAlign: "justify" }}>
          Welcome to Coco&apos;s Cakery – Where Every Slice Tells a Story! At Coco&apos;s Cakery, we believe that life is sweeter with a slice of cake.
          Nestled in the heart of Tangerang, our cakery is a haven for cake enthusiasts seeking not just a treat for the taste buds, but a celebration of flavor, artistry, and moments that matter.
          Our ovens have been working tirelessly since 2003 to bring you the finest cakes crafted with passion, expertise, and a dash of magic.
          
          Our Story
          Coco&apos;s Cakery was born out of a love for baking and a desire to create memorable experiences through delicious confections. Our founder, Coco, a seasoned pastry chef 
          with a penchant for perfection, embarked on a culinary journey to curate a menu that would leave an indelible mark on your palate.
          </p>
          <Heading as={"h1"} marginBottom={"20px"} textAlign={"center"}>
            {" "}
           Visit Us{" "}
          </Heading>
          <p
         >
          Visit Us
          Step into our cakery and be greeted by the irresistible aroma of freshly baked treats.
          Our cozy space is a blend of warmth and sweetness, inviting you to explore a world of delectable delights. 
          From cupcakes to tiered wedding cakes, our display showcases the variety of options available to cater to every palate.
          </p>
        </Container>
      
    </Box>
       </h1>
    </div>

    </Center>
 
    
        
    
    )
}
    
