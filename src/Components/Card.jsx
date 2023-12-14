import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
function Card({ plan }) {
  const navigate = useNavigate();
  const user = localStorage.getItem("id");
  function handleClick() {
    {
      user ? navigate("/createrequest", { state: plan }) : navigate("/login");
    }
  }
  return (
    <div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-col"
      onClick={handleClick}
    >
      <img
        className="rounded-t-lg"
        src="https://t4.ftcdn.net/jpg/02/83/83/93/360_F_283839302_yt6JIsE96Pj4PydFDcBNKDUnuSpYB9h0.jpg"
        alt=""
      />
      <div className="p-5 flex-col">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
          {plan.insurance_Name}
        </h2>
        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
          {plan.insurance_Description}
        </p>
        <div className="flex mx-auto justify-between">
          <span className="text-red-800 font-bold">
            Duration: {plan.insurance_Duration}
          </span>
          <span className="text-red-800 font-bold">
            Price: {plan.insurance_Price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
