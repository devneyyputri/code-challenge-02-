import DashboardLayout from "@/app/dashboardLayout";
import Image from 'next/image'
import { Box, Center } from "@chakra-ui/react";
import { getdata } from "@/utils/products/getdata";

export const revalidate= 1;

export default async function Page({ params }) {
  const { id } = params;
  const content = await getdata(id);
  console.log(id, params, content)
  
  const img = "https:"+ content.fields.link

  return (
    
    <DashboardLayout>
        
    <div className=" font-serif">
        <Box w={"90%"} m={"5%"} borderColor={"red"} border={"2px"} rounded={"10px"}>
            <Center  roundedTop={"8px"} bg={"white"}style={{fontSize:"5vw", color:"#996515"}} >{content.fields.name}</Center>
            <div className=" grid grid-cols-4  font-serif">
                <div className=" col-span-2 row-span-1 relative m-2 align-middle">
                     <Image src={img}   width={10} height={10} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt="prof-pic"/>                
                </div>
                <div className=" col-span-2 m-2" style={{fontSize:"3vw"}}>
                    <Box>{content.fields.description}</Box>
                </div>
                <div className=" col-span-2 m-2" style={{fontSize:"3vw"}}>
                    <Box>Price:{content.fields.price}</Box>
                </div>


            </div>

        </Box>
    </div>
    
    </DashboardLayout>

    );
}
// export default async function Page({ params }) {
//     return (
//  <div>
//         <h1> Product Detail id {props.params.id}</h1>
//         <Flex>
//         <Image
        
//          src="/cake2.png"
//          width={250}
//          height={250}
//          alt="product1"
//          /> {" "}
        
//         {" "}
//         <Image
//          src="/cromboloni.png"
//          width={250}
//          height={250}
//          alt="product2"
//          />{" "}
        
//         {" "}
//         <Image
//          src="/rollcake.png"
//          width={250}
//          height={250}
//          alt="product3"
//          />{" "}
//         </Flex>
//     </div>
// )
// }