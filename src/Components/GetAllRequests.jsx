import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'
import Requests from './Requests'
import {getCookie} from '../utils'
import Navbar from './Navbar';
function GetAllRequests() {
    const [requestData,setRequestData]=useState([]);
    var id=JSON.parse(localStorage.getItem("id"));
    useEffect(()=>{
        {(getCookie("Role")=="User")?
        axios.get(`https://localhost:7018/api/User/getallrequests/${id}`)
        .then((result)=>{
            console.log(result.data)
            setRequestData(result.data);
        })
        .catch((error)=>{
            console.log(error)
        })
    :

  axios.get(`https://localhost:7018/api/HealthProvider/allrequest/${id}`)
  .then((result)=>{
    console.log(result.data)
    setRequestData(result.data);
  })
  .catch((error)=>{
    console.log(error)
  })
}
},[])
  
  return (
    <div>
      <Navbar/>
      <h1 className='text-4xl text-blue-400'>All Requests</h1>
    <div className='flex flex-col'>
      {requestData.map((x,index)=>(
                    <Requests key={index} x={x}></Requests>
                ))}
    </div>
    </div>
  )
}

export default GetAllRequests
