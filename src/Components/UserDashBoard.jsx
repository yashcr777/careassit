import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "./Button";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { getCookie } from "../utils";
function UserDashBoard() {
  const [data, setData] = useState([]);
  var id = JSON.parse(localStorage.getItem("id"));
  useEffect(() => {
    {
      getCookie("Role") == "User" || getCookie("Role") == "Admin"
        ? axios
            .get(`https://localhost:7018/api/User/${id}`)
            .then((result) => {
              console.log(result.data);
              setData(result.data);
            })
            .catch((error) => {
              console.log(error);
            })
        : axios
            .get(`https://localhost:7018/api/HealthProvider/${id}`)
            .then((result) => {
              console.log(result.data);
              setData(result.data);
            })
            .catch((error) => {
              console.log(error);
            });
    }
  }, []);
  let links = [
    { name: "Home", link: "/" },
    getCookie("Role") === "User" || getCookie("Role") === "HealthProvider" || getCookie("Role") === "Admin"
      ? { name: "Insuranceplan", link: "/insuranceplans" }
      : { name: "Createplan", link: "/createplan" },
    getCookie("Role") == "Admin"?{ name: "All Requests", link: "/allrequest" }:{ name: "Requests", link: "/getallrequests" },
    getCookie("Role") == "Admin"?{name:"All Invoices",link:"/allinvoice"}:{ name: "Invoices", link: "/getallinvoices" },
    getCookie("Role") === "User" || getCookie("Role") === "InsuranceCompany"
      ? { name: "Claims", link: "/getallclaims" }
      : getCookie("Role") == "Admin"?{name: "All Claims", link: "/allclaim"}: {name: "", link: "/" },
    getCookie("Role") === "User"
      ? { name: "AllHealthProviders", link: "/allproviders" }
      : { name: "", link: "/" },
      { name: "Logout", link: "/logout" },
  ];
  return (
    <div>
      <Navbar/>

      <div className="flex flex-col justify-center items-center h-screen w-full">
        <h1 className="text-6xl text-blue-800 mb-8">User Dashboard</h1>
        {getCookie("Role") == "User" ? (
          <h1 className="text-2xl text-red-700 my-3">
            Your email- {data.email}
          </h1>
        ) : (
          ""
        )}{" "}
        {getCookie("Role") == "User" || getCookie("Role") == "Admin" ? (
          <h1 className="text-2xl text-red-700 my-3">Your name- {data.name}</h1>
        ) : (
          <h1 className="text-2xl text-red-700 my-3">
            Your name-{data.helathProvider_Name}
          </h1>
        )}
        {getCookie("Role") == "User" ? (
          <h1 className="text-2xl text-red-700 my-3">
            Your address- {data.address}
          </h1>
        ) : (
          ""
        )}
        {getCookie("Role") == "User" ? (
          <h1 className="text-2xl text-red-700 my-3">Your Dob- {data.dob}</h1>
        ) : (
          ""
        )}
        {getCookie("Role") == "User" ? (
          <h1 className="text-2xl text-red-700 my-3">
            Your Gender- {data.gender}
          </h1>
        ) : (
          ""
        )}
        {getCookie("Role") == "User" ? (
          <h1 className="text-2xl text-red-700 my-3">
            Your Contact-Number- {data.contactNumber}
          </h1>
        ) : (
          ""
        )}
        {getCookie("Role") == "User" ? (
          <h1 className="text-2xl text-red-700 my-3">
            Your Description- {data.description}
          </h1>
        ) : (
          ""
        )}
        {getCookie("Role") == "User" ? (
          <h1 className="text-2xl text-red-700 my-3">
            Your Blood Group- {data.blood_Group}
          </h1>
        ) : (
          ""
        )}
        {getCookie("Role") == "User" ? (
          <h1 className="text-2xl text-red-700 my-3">
            <Link to="/UserDashboardUpdateForm">
              <Button>Update User</Button>
            </Link>
          </h1>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default UserDashBoard;
