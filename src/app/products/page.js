
"use client";

import style from "./page.module.css"
import DashboardLayout from "../dashboardLayout";
import Link from "next/link";
import { Box } from "@chakra-ui/react";
import useSWR from "swr";
import { Center, position } from "@chakra-ui/react";
import Image from "next/image"


 
export default function Products() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error, isLoading } = useSWR(
      "/api/products",
      fetcher
    );
    if (error) {
        return <div> Failed to Load</div>;
      }
    
      if (isLoading) {
        return <div> Loading from SWR ... </div>;
      }
      
      const url1 ="https:" + data.content.includes.Asset[0].fields.file.url
      const url2 ="https:" + data.content.includes.Asset[1].fields.file.url
      const url3 ="https:" + data.content.includes.Asset[2].fields.file.url

  const desc = data.content
  console.log("data.content.includes ")
    
    return (
    <DashboardLayout>
    <Box>

      <Center>
      <h1 className="font-serif" style={{fontSize:"4vw", margin:"3%", color:"red-900"}}> Products </h1>
 
      </Center>
      <hr></hr>

      <Center>
      <div className="grid grid-cols-1 gap-3 w-4/5 font-serif"style={{fontSize:"3vw", marginTop:"5%", color: "white"}}>

        <div className="col-span-1 border-2 rounded-lg  bg-red-700" >
          <div className=" grid grid-cols-3 gap-2">
          <div className="col-span-1 row-span-2 my-2 p-2 " >
          <Image src={url2}   width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto'}} alt="cafe"/>
          </div>
          <div className=" col-span-2  border-b-2 m-2 border-white relative">
          <Link href={`/products/${desc.items[0].sys.id}`}  style={{width: "60%", position: "absolute", left:"2", bottom:"2"}}>{desc.items[0].fields.name}</Link>
          </div>
          <div className="col-span-2  m-2">
          <p style={{  display:"inline-block",
                        fontSize:"2vw",
                        whiteSpace:"nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "30ch"}}>{desc.items[0].fields.description}</p>
          </div>
          </div>
        </div>

        <div className="col-span-1 border-2 rounded-lg  bg-gradient-to-r bg-red-400" >
          <div className=" grid grid-cols-3 gap-2">
          <div className="col-span-1 row-span-2 my-2 p-2" >
          <Image src={url1}   width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto'}} alt="cafe"/>
          </div>
          <div className=" col-span-2  border-b-2 m-2 border-white relative">
          <Link href={`/products/${desc.items[1].sys.id}`}  style={{width: "60%", position: "absolute", left:"2", bottom:"2"}}>{desc.items[1].fields.name}</Link>
          </div>
          <div className="col-span-2  m-2">
          <p style={{  display:"inline-block",
                        fontSize:"2vw",
                        whiteSpace:"nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "30ch"}}>{desc.items[1].fields.description}</p>
          </div>
          </div>
        </div>
        <div className="col-span-1border-2 rounded-lg bg-red-200" >
          <div className=" grid grid-cols-3 gap-2">
          <div className="col-span-1 row-span-2 my-2 p-2" >
          <Image src={url3}   width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto'}} alt="cafe"/>
          </div>
          <div className=" col-span-2  border-b-2 m-2 border-white relative">
          <Link href={`/products/${desc.items[2].sys.id}`}  style={{width: "60%", position: "absolute", left:"2", bottom:"2"}}>{desc.items[2].fields.name}</Link>
          </div>
          <div className="col-span-2  m-2">
          <p style={{  display:"inline-block",
                        fontSize:"2vw",
                        whiteSpace:"nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "30ch"}}>{desc.items[2].fields.description}</p>
          </div>
          </div>
        </div>
      </div>
      </Center>


    </Box>
    </DashboardLayout>
    );
}

// export default function Page() {
//     return (
//         <>
//     <Button  onClick={() => router.push("/products/123")}> click here </Button>
//     <Stack direction='row' spacing={4} align='center'>
//      <Button colorScheme='teal' variant='solid'>
//         Button
//      </Button>
//      </Stack>
     
//     <div className={style["product-list"]}>
   
//         <h1> Product List </h1>
        
//          <Button colorScheme='teal' variant='outline' href={'/products/123'}>
//          Menu
//         </Button> 
//         <Button colorScheme='pink'>
//         <Link  href={'/products/123'}> Menu </Link>
//         </Button>
           
    
//          </div> 
//        </>     
//     )
    
// }
 