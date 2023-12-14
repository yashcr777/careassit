import React from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function AcceptClaim() {
  var id = JSON.parse(localStorage.getItem("id"));
  const location = useLocation();
  const x = location.state;
  const url = `https://localhost:7018/api/InsuranceCompany/acceptclaim/${id}`;
  const data = {
    claim_Id: x.claim_Id,
  };
  useEffect(() => {
    axios
      .put(url, data)
      .then((result) => {
        console.log(result);
        console.log(x.claim_Id);
      })
      .catch((error) => {
        console.log(error);
        console.log(x.claim_Id);
        console.log(id);
      });
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-800">
        {x.status2 == 1 ? "Claimed" : "Unclaimed"}
      </h1>
    </div>
  );
}

export default AcceptClaim;
