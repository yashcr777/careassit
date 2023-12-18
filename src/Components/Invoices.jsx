import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../utils";
// Get All Invoices
function Invoices({ x }) {
  const userid = JSON.parse(localStorage.getItem("id"));
  const [createClaim, setCreateClaim] = useState(false);
  const [userData,setUserData]=useState([]);
  const id = x.invoice_Id;
  useEffect(() => {
    axios
      .get(`https://localhost:7018/api/Invoice/checkforclaim/${id}`)
      .then((result) => {
        setCreateClaim(true);
      })
      .catch((error) => {
        setCreateClaim(false);
        console.log(error);
      });
      axios
      .get(`https://localhost:7018/api/User/${userid}`)
      .then((result) => {
        setUserData(result.data);
        console.log(result.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);
  const navigate = useNavigate();
  function handleClick() {
    {
      navigate("/createclaim", { state: x });
    }
  }
  function handleClickPayment() {
    {
      navigate("/invoicepayment", { state: x });
    }
  }
  return (
    <div>
      <div className="bg-blue-300 flex mt-4 border border-gray-800 shadow dark:bg-gray-800 dark:border-gray-700 w-full h-34 flex-col rounded-md my-6">
        <h2 className="p-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Hi {userData.name} your plan Invoice Id- {x.invoice_Id}
        </h2>
        {/* <p className='p-2'>invoice status is below</p> */}
        <div className="p-2 flex justify-between mt-2">
          <h3 className="mt-2 font-bold tracking-tight text-black-400 dark:text-white">
            Invoice status is- {x.status == 0 ? "Claimed" : "Unclaimed"}
          </h3>
          <h3 className="mt-2 font-bold tracking-tight text-black-400 dark:text-white">
            Invoice Number- {x.invoiceNumber}
          </h3>
        </div>
        {getCookie("Role") === "User" && createClaim === false ? (
          <button className="w-36 my-5 py-2 bg-teal-500" onClick={handleClick}>
            Create Claim
          </button>
        ) : (
          ""
        )}
        {getCookie("Role") === "User" && userid && x.status==1 ? (
          <button
            className="w-36 my-5 py-2 bg-teal-500"
            onClick={handleClickPayment}
          >
            Invoice Payment
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Invoices;
