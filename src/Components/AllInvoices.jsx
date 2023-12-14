import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Invoices from "./Invoices";

function AllInvoices() {
  const[data,setData]=useState([]);
  const url="https://localhost:7018/api/Invoice";
  useEffect(()=>{
    axios.get(url)
    .then((result) => {
      setData(result.data);
      console.log(result.data);
    })
    .catch((error) => {
      console.log(error);
    })
  },[])
  return (
    <div className='flex flex-col'>
      {data.map((x,index)=>(
                    <Invoices key={index} x={x}></Invoices>
                ))}
    </div>
  )
}

export default AllInvoices;
