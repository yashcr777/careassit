import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function InvoicePayment() {
  var id = JSON.parse(localStorage.getItem("id"));
  const location = useLocation();
  const x = location.state;
  const url = `https://localhost:7018/api/User/invoicepayment/${id}`;
  const data = {
    invoice_Id: x.invoice_Id,
  };
  useEffect(() => {
    axios
      .put(url, data)
      .then((result) => {
        console.log(result);
        console.log(x.invoice_Id);
      })
      .catch((error) => {
        console.log(error);
        console.log(x.invoice_Id);
        console.log(id);
      });
  }, []);
  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-800">
        {x.status == 0 ? "Paid" : "UnPaid"}
      </h1>
    </div>
  );
}

export default InvoicePayment;
