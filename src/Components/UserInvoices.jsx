import React from 'react'
import { useState } from 'react'

function UserInvoices() {
    const data={invoicenumber:"",invoicedate:""};
    const [invoiceData,setInvoiceData]=useState(data);
    var id=JSON.parse(localStorage.getItem("id"));
    useEffect(()=>{
        axios.get(`https://localhost:7018/api/User/getallinvoice/${id}`)
        .then((result)=>{
            console.log(result.data);
            setInvoiceData(result.data);
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
  return (
    <div>
      <h1>Hi User</h1>
    </div>
  )
}

export default UserInvoices
