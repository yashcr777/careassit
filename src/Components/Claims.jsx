import React from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../utils";
function Claims({ x }) {
  //const user=localStorage.getItem("id");
  const navigate = useNavigate();
  function handleClick() {
    {
      navigate("/acceptclaim", { state: x });
    }
  }
  return (
    <div className="mt-2">
      <div className="bg-blue-300 my-2 flex border border-gray-800 shadow dark:bg-gray-800 dark:border-gray-700 w-full h-34 flex-col rounded-md">
        <h2 class="p-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Hello {x.user_Name}
        </h2>
        <p className="p-2">hello my friend</p>
        <div className="p-2 flex justify-between mt-2">
          <h3 className="mt-2 font-bold tracking-tight text-black dark:text-white">
            Claim-id {x.claim_Id}
          </h3>
          <h3 className="mt-2 font-bold tracking-tight text-black dark:text-white">
            {x.status2 === 0 ? "Claim Approved" : "Not Approved"}
          </h3>
          <div>
            {getCookie("Role") === "InsuranceCompany" ? (
              <button
                className="w-36 my-5 py-2 bg-teal-500"
                onClick={handleClick}
              >
                Accept Claims
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Claims;
