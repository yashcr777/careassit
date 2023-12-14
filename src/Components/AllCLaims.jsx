import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Claims from "./Claims";

function AllCLaims() {
  const url = "https://localhost:7018/api/Claim";
  const [ data, setData ] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((result) => {
        setData(result.data);
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="flex flex-col">
      {data?.map((x, index) => (
        <Claims key={index} x={x}></Claims>
      ))}
    </div>
  );
}

export default AllCLaims;
