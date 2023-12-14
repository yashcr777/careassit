import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function CreatePlans() {
  const navigate = useNavigate();
  const data = {
    insurance_Name: "",
    insurance_Description: "",
    insurance_Price: "",
    insurance_Duration: "",
  };
  const [inputData, setInsputData] = useState(data);
  var id = JSON.parse(localStorage.getItem("id"));
  function handleData(e) {
    setInsputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (
      !inputData.insurance_Name ||
      !inputData.insurance_Description ||
      !inputData.insurance_Price ||
      !inputData.insurance_Duration
    ) {
      alert("All Fields are Mandatory");
    } else {
      const url = "https://localhost:7018/api/InsurancePlan";
      const data = {
        insuranceCompany_Id: id,
        insurance_Name: inputData.insurance_Name,
        insurance_Description: inputData.insurance_Description,
        insurance_Price: inputData.insurance_Price,
        insurance_Duration: inputData.insurance_Duration,
      };
      axios
        .post(url, data)
        .then((result) => {
          console.log(result);
          navigate("/");
        })
        .catch((error) => {
          console.log(data);
          console.log(error);
        });
    }
  }
  return (
    <div className="flex-col">
      <form
        className="h-screen border-4 border-indigo-600  w-full max-auto bg-blue-400 p-8 px-8 rounded-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl dark:text-white font-bold m">Create Plan</h1>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">Plan Name</label>
          <input
            className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-800 focus:outline-none"
            type="text"
            placeholder="Enter plan name"
            name="insurance_Name"
            value={inputData.insurance_Name}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">Plan Description</label>
          <input
            className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-800 focus:outline-none"
            type="text"
            placeholder="Enter plan description"
            name="insurance_Description"
            value={inputData.insurance_Description}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">Plan Price</label>
          <input
            className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-300 focus:outline-none"
            type="text"
            placeholder="Enter plan price"
            name="insurance_Price"
            value={inputData.insurance_Price}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">Plan Duration</label>
          <input
            className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-300 focus:outline-none"
            type="text"
            placeholder="Enter plan duration"
            name="insurance_Duration"
            value={inputData.insurance_Duration}
            onChange={handleData}
          ></input>
        </div>
        <button className="w-full my-5 py-2 bg-indigo-600" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatePlans;
