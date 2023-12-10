import Image from 'next/image'
import { Box, Center, Container, Flex, Heading } from "@chakra-ui/react";


export default function Page(props) {
    return (
    <div>
       <h1>
        <Flex>
        <Image 
          src="/aboutus.png"
          alt="aboutus"
          width={320}
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
          width={350}
          height={300}
        /> 
        <Image 
          src="/aboutus4.png"
          alt="aboutus4"
          width={350}
          height={300}
        /> 
        </Flex>
    <Box padding={"20px 0"}>
      <Center>
        <Container>
          <Center>
          <Heading as={"h1"} marginBottom={"20px"}>
            About Us{" "}
          </Heading>
          </Center>
          <hr style={{ marginBottom: "20px", color: "red-900" }}></hr>
          <p style={{ textAlign: "justify" }}>
          Welcome to Coco&apos;s Cakery – Where Every Slice Tells a Story! At Coco&apos;s Cakery, we believe that life is sweeter with a slice of cake. Nestled in the heart of Tangerang, our cakery is a haven for cake enthusiasts seeking not just a treat for the taste buds, but a celebration of flavor, artistry, and moments that matter. Our ovens have been working tirelessly since 2003 to bring you the finest cakes crafted with passion, expertise, and a dash of magic.
          Our Story
          Coco&apos;s Cakery was born out of a love for baking and a desire to create memorable experiences through delicious confections. Our founder, Devney, a seasoned pastry chef with a penchant for perfection, embarked on a culinary journey to curate a menu that would leave an indelible mark on your palate.
          </p>
          <Heading as={"h1"} marginBottom={"20px"}>
            {" "}
           Visit Us{" "}
          </Heading>
          <p>
          Visit Us
          Step into our cakery and be greeted by the irresistible aroma of freshly baked treats. Our cozy space is a blend of warmth and sweetness, inviting you to explore a world of delectable delights. From cupcakes to tiered wedding cakes, our display showcases the variety of options available to cater to every palate.

          </p>
        </Container>
      </Center>
    </Box>
       </h1>
    </div>
    
 
    
        
    
    )
}
    