import React from "react";
import { useState } from "react";
import axios from "axios";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
function CreateInvoice() {
  const location = useLocation();
  const navigate = useNavigate();
  const x = location.state;
  var id = JSON.parse(localStorage.getItem("id"));
  const data = {
    user_Name: "",
    dob: "",
    address: "",
    dateOfService: "",
    treatment: "",
    diagnosis: "",
    claim_Amount: "",
  };
  const [inputData, setInsputData] = useState(data);

  function handleData(e) {
    setInsputData({ ...inputData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (
      !inputData.user_Name ||
      !inputData.dob ||
      !inputData.address ||
      !inputData.dateOfService ||
      !inputData.treatment ||
      !inputData.diagnosis ||
      !inputData.claim_Amount
    ) {
      alert("All Fields are Mandatory");
    } else {
      const url = "https://localhost:7018/api/User/submitclaim";
      const data = {
        user_Id: id,
        invoice_Id: x.invoice_Id,
        insuranceCompant_Id: "ec82c05d-04a7-4442-d415-08dbf61401e6",
        user_Name: inputData.user_Name,
        dob: inputData.dob,
        address: inputData.address,
        dateOfService: inputData.dateOfService,
        treatment: inputData.treatment,
        diagnosis: inputData.diagnosis,
        claim_Amount: inputData.claim_Amount,
        invoice_Amount: x.total_Amount,
      };
      axios
        .post(url, data)
        .then((result) => {
          console.log(result);
          console.log(data);
          navigate("/");
        })
        .catch((error) => {
          console.log(x.invoice_Id);
          console.log(data);
          console.log(error);
        });
    }
  }
  return (
    <div className="flex-col">
      <form
        className="h-max border-4 border-indigo-600  w-full max-auto bg-blue-400 p-8 px-8 rounded-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl dark:text-white font-bold m">Create Claims</h1>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">user Name</label>
          <input
            className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-800 focus:outline-none"
            type="text"
            placeholder="Enter plan user_Name"
            name="user_Name"
            value={inputData.user_Name}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">dob</label>
          <input
            className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-800 focus:outline-none"
            type="text"
            placeholder="Enter dob"
            name="dob"
            value={inputData.dob}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">address</label>
          <input
            className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-300 focus:outline-none"
            type="text"
            placeholder="Enter address"
            name="address"
            value={inputData.address}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">dateOfService</label>
          <input
            className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-300 focus:outline-none"
            type="date"
            placeholder="Enter dateOfService"
            name="dateOfService"
            value={inputData.dateOfService}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">treatment</label>
          <input
            className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-300 focus:outline-none"
            type="text"
            placeholder="Enter treatment"
            name="treatment"
            value={inputData.treatment}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">diagnosis</label>
          <input
            className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-300 focus:outline-none"
            type="text"
            placeholder="Enter diagnosis"
            name="diagnosis"
            value={inputData.diagnosis}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">claim_Amount</label>
          <input
            className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-300 focus:outline-none"
            type="text"
            placeholder="Enter claim_Amount"
            name="claim_Amount"
            value={inputData.claim_Amount}
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

export default CreateInvoice;
