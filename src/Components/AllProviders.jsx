import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Providers from "./Providers";
function AllProviders() {
  const [providerData, setProviderData] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:7018/api/HealthProvider/all")
      .then((result) => {
        console.log(result.data);
        setProviderData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className="flex flex-row">
        {providerData.map((x, index) => (
          <Providers key={x} x={x}></Providers>
        ))}
      </div>
    </div>
  );
}

export default AllProviders;
