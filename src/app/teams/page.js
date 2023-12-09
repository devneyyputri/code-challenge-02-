"use client";
import useSWR from "swr";
import Image from "next/image";
import { useState } from 'react';
import { Center } from "@chakra-ui/react";

export  default function Blog() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "/api/teams",
    fetcher
  );

  if (error) {
    return <div> Failed to Load</div>;
  }

  if (isLoading) {
    return <div> Loading from SWR ... </div>;
  }  
  const user_data= data.team?.results

  return(


   <>
<button onClick={()=> console.log(data)}>coco</button>

        <div  className="  m-auto  text-xl justify-center text-center p-10" >
                <h1 className="font-mono font-large"> Cocos's Teams</h1>
        </div>
        {data.teams?.results?.map((item, index)=>{
            return(

            <>
            <Center>
            <div key={index} className=" font-mono my-20 justify-center">           
            <div className="grid grid-cols-4 gap-1 m-auto justify-center  border-white rounded-lg  bg-red-200 p-2" >
                <div className="  m-auto justify-center row-span-3">
                <Image className="rounded-full  self-center" src={item.picture.large} width={150} height={150} alt="profile pic"/>
                </div>  
                <div className=" text-lg inline-block align-middle mx-auto col-span-2 w-full S">
                    <p>{item.name.title}. {item.name.first} {item.name.last}</p>
                </div>
                
                <div className="  text-lg items-center col-span-2">
                    <p>{item.location.country}, {item.location.state}, {item.location.city}</p>
                </div>
                <div className="  text-lg items-center col-span-2" >
                   
                </div>
                
                <div className=" h-full col-span-4">
                    <p> </p>
                </div>
                <div className=" top-3 text-lg items-center col-span-1" >
                    
                </div>
                <div className=" flex-auto items-center col-span-3" >
                    <p> {item.email} </p>
                </div>
                <div className=" text-lg items-center col-span-1" >
                   
                </div>
            
            </div>
        </div> 
        </Center>
       
            </>

            )


        })}
        {/* <button onClick={console.log(user_data)}> click me</button> */}

           
 </>
 
  )
  }