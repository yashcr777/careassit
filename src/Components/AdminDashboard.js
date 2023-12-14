import React from 'react'
import { useState } from 'react'
import {useEffect} from 'react'
import axios from 'axios';
function AdminDashboard() {
  const [invoicesData,setInvoicesData]=useState([]);
  const [claimsData,setClaimsData]=useState([]);
  useEffect(()=>{
    axios.get('https://localhost:7018/api/Claim')
    .then((result)=>{
        console.log(result.data);
        setClaimsData(result.data);
    })
    .catch((error)=>{
        console.log(error)
    })
    axios.get('https://localhost:7018/api/Invoice')
    .then((result)=>{
        console.log(result.data);
        setInvoicesData(result.data);
    })
    .catch((error)=>{
        console.log(error)
    })
},[])
  return (
    <div>
      {/* print all the claim and invoice */}
      {/* Get All Invoices */}
      {/* Get All Claims */}
      <div>{invoicesData}</div>
      <div>{claimsData}</div>
      
    </div>
  )
}

export default AdminDashboard
