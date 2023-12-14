import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Claims from "./Claims";
import { getCookie } from "../utils";
import Navbar from "./Navbar";
function GetAllClaims() {
  const [claimData, setClaimData] = useState([]);
  var id = JSON.parse(localStorage.getItem("id"));
  useEffect(() => {
    {
      getCookie("Role") == "User"
        ? axios
            .get(`https://localhost:7018/api/User/getallclaims/${id}`)
            .then((result) => {
              console.log(result.data);
              setClaimData(result.data);
            })
            .catch((error) => {
              console.log(error);
            })
        : axios
            .get(
              `https://localhost:7018/api/InsuranceCompany/getallclaims/${id}`
            )
            .then((result) => {
              console.log(result.data);
              setClaimData(result.data);
            })
            .catch((error) => {
              console.log(error);
            });
    }
  }, []);
  return (
    <div>
      <Navbar/>
    <div className="flex flex-col">
      {claimData.map((x, index) => (
        <Claims key={index} x={x}></Claims>
      ))}
    </div>
    </div>
  );
}

export default GetAllClaims;
