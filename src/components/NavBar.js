"use client";
import Link from "next/link";
import { Box, Flex, Container, Center } from "@chakra-ui/react"
import Image from "next/image";

export default function NavBar() {
    return (
         <Box  textColor={"white"} bgColor={"#9B2C2C"} h={"80px"} lineHeight={"40px"} maxW={{ base: "full", md: "275px" }}>
            <Center>
                <Container>
                    <Flex  marginLeft={20} marginTop={25}>
                            
                        <div w={"50%"} style={{marginRight:20 }}>
                            <Link href={"/"}> Cocopuffs </Link>
                        </div>
                        <nav w={"60%"}>
                            <Link href={"/"} className="mr-[20px]">
                                {" "}
                                Home{" "}
                            </Link>
                            <Link  href={"/products"} className="mr-[20px]">
                                {" "}
                                Products
                            </Link>    
                            <Link href={"/teams"} className="mr-[20px]">
                                {" "}
                                Teams
                            </Link>
                            <Link href={"/aboutus"} className="mr-[20px]">
                                {" "}
                                About{" "}
                            </Link>
                        </nav>
                        <Flex>
                        <Box marginLeft={35} marginTop={5}>
                         <a color={'white'}>
                            <Image src='/instagram.svg' width={24} height={34} alt="instagram"/>
                        </a>
                        </Box>
                        <Box marginLeft={25} marginTop={9}>
                        <a color={'white'}>
                            <Image src='/twt.svg' width={24} height={34} alt="instagram"/>
                        </a>
                        </Box>
                        </Flex>
                    </Flex>
                </Container>
            </Center>
        </Box>

    )
}
    
       
    


