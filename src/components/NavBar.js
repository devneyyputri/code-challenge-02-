"use client";
import Link from "next/link";
import { Box, Flex, Container, Center } from "@chakra-ui/react"
import Image from "next/image";

export default function NavBar() {
    return (
         <Box bgColor={"brown"} h={"60px"} lineHeight={"50px"} color={"white"} maxW={{ base: "full", md: "275px" }}>
            <Center>
                <Container>
                    <Flex >
                       
                         <a color={'white'}>
                            <Image src='/instagram.svg' width={24} height={34} alt="instagram"/>
                        </a>
                             
                        <div w={"40%"} style={{marginRight: 50 }}>
                            <Link href={"/"}> Cocopuffs </Link>
                        </div>
                        <nav w={"80%"}>
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
                    </Flex>
                </Container>
            </Center>
        </Box>

    )
}
    
       
    


