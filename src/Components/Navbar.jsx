import React, { useState } from "react";
import Button from "./Button";
import { getCookie } from "../utils";
import { Link } from "react-router-dom";
var user = JSON.parse(localStorage.getItem("id"));
const Navbar = () => {
  var user = JSON.parse(localStorage.getItem("id"));
  // let Links = [
  //   { name: links[0].name, link: links[0].link },
  //   { name: links[1].name, link: links[1].link },
  //   { name: links[2].name, link: links[2].link },
  //   { name: links[3].name, link: links[3].link },
  //   { name: links[4].name, link: links[4].link },
  //   { name: links[5].name, link: links[5].link },
  //   { name: links[6].name, link: links[6].link },
  // ];
  let links;
  user?
  (links = [
    { name: "Home", link: "/" },
    getCookie("Role") === "User" || getCookie("Role") === "HealthProvider" || getCookie("Role") === "Admin"
      ? { name: "Insuranceplan", link: "/insuranceplans" }
      : { name: "Createplan", link: "/createplan" },
    getCookie("Role") === "Admin"?{ name: "All Requests", link: "/allrequest" }:{ name: "Requests", link: "/getallrequests" },
    getCookie("Role") === "Admin"?{name:"All Invoices",link:"/allinvoice"}:{ name: "Invoices", link: "/getallinvoices" },
    getCookie("Role") === "User" || getCookie("Role") === "InsuranceCompany"
      ? { name: "Claims", link: "/getallclaims" }
      : getCookie("Role") === "Admin"?{name: "All Claims", link: "/allclaim"}: {name: "", link: "/" },
    getCookie("Role") === "User"
      ? { name: "AllHealthProviders", link: "/allproviders" }
      : { name: "", link: "/" },
      getCookie("Role") === "Admin"
      ? { name: "AddProviders", link: "/addprovider" }
      : { name: "", link: "/" },
      getCookie("Role") === "Admin"
      ? { name: "AddCompany", link: "/addcompany" }
      : { name: "", link: "/" },
      { name: "Logout", link: "/logout" },
  ]):(links = [
    { name: "Home", link: "/" },
    { name: "Insuranceplans", link: "/insuranceplans" },
    { name: "Login", link: "/login" },
    { name: "SignUp", link: "/signup" },
    { name: "About", link: "/About" },
    { name: "Contact", link: "/Contact" },
    { name: "AllHealthProviders", link: "/allproviders" },
  ])

  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full top-0 left-0">
      <div className="md:flex items-center justify-between bg-blue-400 py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          CareAssist
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-blue-400 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          {!getCookie("Role") === "Admin"?(user?(<Link to="/login">
            <Button>Get Started</Button>
          </Link>):(<Link to="/insuranceplans">
            <Button>Get Started</Button>
          </Link>)):(<div></div>)}
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
