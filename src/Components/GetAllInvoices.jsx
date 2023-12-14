import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Invoices from './Invoices'
import {getCookie} from '../utils'
import Navbar from './Navbar';
function GetAllInvoices() {
    var id=JSON.parse(localStorage.getItem("id"));
    const [invoiceData,setInvoiceData]=useState([]);
    useEffect(()=>{
      {(getCookie("Role")=="User")?
        axios.get(`https://localhost:7018/api/User/getallinvoice/${id}`)
        .then((result)=>{
            console.log(result.data)
            setInvoiceData(result.data);
        })
        .catch((error)=>{
            console.log(error)
        })
        :
        axios.get(`https://localhost:7018/api/HealthProvider/getallinvoice/${id}`)
        .then((result)=>{
            console.log(result.data)
            setInvoiceData(result.data);
        })
        .catch((error)=>{
            console.log(error)
        })
      }
    },[])
  return (
    <div>
      <Navbar/>
      <h1 className='my-3 text-4xl text-blue-400'>All Invoices</h1>
    <div className='flex flex-col my-2'>
      {invoiceData.map((x,index)=>(
                    <Invoices key={index} x={x}></Invoices>
                ))}
    </div>
    </div>
  )
}

export default GetAllInvoices
