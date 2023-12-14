import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";
import { getCookie } from "../utils";
import axios from 'axios'
// Get All Invoices
function Requests({ x }) {
  const navigate = useNavigate();
  
  const [userData,setUserData]=useState([]);
  const userid =JSON.parse(localStorage.getItem("id"));
  function handleClick() {
    {
      navigate("/createinvoice", { state: x });
    }
  }
  const handleClickDocs = () => {
    console.log(x.docUrl)
    window.open(x.docUrl);
  }
  useEffect(()=>{
    axios.get(`https://localhost:7018/api/User/${userid}`)
      .then((result) => {
        setUserData(result.data);
        console.log(result.data)
      })
      .catch((error) => {
        console.log(error);
      })
  },[])
  return (
    <div>
      <div className="bg-blue-300 flex mt-4 border border-gray-800 shadow dark:bg-gray-800 dark:border-gray-700 w-full h-34 flex-col">
        <h2 className="p-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Hello {userData.name} your plan is Request Id- {x.request_Id}
        </h2>
        <p className="p-2">request status is below</p>
        <div className="p-2 flex justify-between mt-2">
          <h3 className="mt-2 font-bold tracking-tight text-black-400 dark:text-black">
            {x.status1 ? "NotSubmitted" : "Submitted"}
          </h3>
          <div>
            {getCookie("Role") == "HealthProvider" ? (
              <div className="flex mx-4">
              <button
                className="w-36 my-5 py-2 bg-teal-500 mx-2"
                onClick={handleClick}
              >
                Make Invoice
              </button>
              <button
                className="w-36 my-5 py-2 bg-teal-500 mx-2"
                onClick={handleClickDocs}
              >
                Patient Docs
              </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Requests;
