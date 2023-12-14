import React from "react";
import Navbar from "./Navbar";
import InsurancePlans from "./InsurancePlans";
import Footer from "./Footer";
function Home() {
  let links = [
    { name: "Home", link: "/" },
    { name: "Insuranceplans", link: "/insuranceplans" },
    { name: "Login", link: "/login" },
    { name: "SignUp", link: "/signup" },
    { name: "About", link: "/About" },
    { name: "Contact", link: "/Contact" },
    { name: "AllHealthProviders", link: "/allproviders" },
  ];

  return (
    <div>
      <InsurancePlans />
    </div>
  );
}

export default Home;
