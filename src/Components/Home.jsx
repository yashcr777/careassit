import React from "react";
import Navbar from "./Navbar";
import InsurancePlans from "./InsurancePlans";
import Footer from "./Footer";
import Singleplan from "./Singleplan";
import { Carousel,IconButton } from "@material-tailwind/react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
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
  // https://t4.ftcdn.net/jpg/02/83/83/93/360_F_283839302_yt6JIsE96Pj4PydFDcBNKDUnuSpYB9h0.jpg
  return (
    <div>
      <Navbar/>
      <p className="my-6 ml-6 text-4xl text-black">Let's find you
          <p className="text-black font-bold">{" "}the Best Insurance</p>
          </p>
      {/* <div className="mx-auto w-full"> */}
      {/* <TECarousel showControls showIndicators ride="carousel">
        <div className="relative w-full after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform"
            style={{color:"black"}}
          >
            <img
              src="https://static.pbcdn.in/cdn/images/home/health_cb_hp_emi.png"
              className="mx-auto"
              style={{height:"26rem"}}
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl text-blue-500 font-bold">Plan For Asthma Paient</h5>
              <p className="text-xl text-blue-500 font-bold">
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left hidden -mr-[100%] w-full transition-transform"
          >
            <img
              src="https://static.pbcdn.in/cdn/images/home/health_cb_hp_emi.png"
              className="w-full "
              style={{height:"26rem"}}
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl text-blue-600 font-bold">Plan for Cancer Patient</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[1ms] "
          >
            <img
              src="https://static.pbcdn.in/cdn/images/home/term_crore_desktop.png?v=1"
              className="w-full"
              style={{height:"26rem"}}
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl text-blue-600 font-bold">Plans For Diabeties Patient</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
      </div> */}
      <Singleplan/>
    </div>
  );
}

export default Home;
