import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Navbar from "./Navbar";

function InsurancePlans() {
  var user = JSON.parse(localStorage.getItem("id"));
  const [companyData, setCompanyData] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:7018/api/InsurancePlan")
      .then((result) => {
        console.log(result.data);
        setCompanyData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {/* <Navbar/> */}
      <div className="flex justify-center my-6">
        <div className="flex-col">
        {(!user)?<h2 className="text-4xl text-blue-500">Hello Welcome to CareAssit</h2>:<h2 className="mt-4 text-4xl text-blue-500">Welcome Yash please choose any plan</h2>}
        {/* {(user)?<h2 className="ml-1 mt-4 text-4xl text-yellow-500">Choose Any Insurance Plan</h2>:""} */}
        </div>
      </div>
      <div className="flex flex-row">
        {companyData.map((plan, index) => (
          <Card key={index} plan={plan}></Card>
        ))}
      </div>
    </div>
  );
}

export default InsurancePlans;
