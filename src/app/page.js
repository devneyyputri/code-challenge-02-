
import Highlight from '@/components/highlight'
import Hero from '@/components/Hero'
import { Box, Center, Flex } from '@chakra-ui/react'
import NavBar from '@/components/NavBar'

export default function Home() {
  return (
    <>
    <Center>
      <Flex>
      <Box maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg">
     {/* <NavBar /> */}
     <Hero/>
    <Highlight />
      </Box>
      </Flex>
    </Center>
    </>
 

  )
}
