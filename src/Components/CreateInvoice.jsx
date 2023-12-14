import React from "react";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
function CreateInvoice() {
  const location = useLocation();
  const x = location.state;
  const navigate = useNavigate();
  const data = {
    invoiceNumber: "",
    invoiceDate: "",
    dueDate: "",
    consultation_Fee: "",
    diag_Tests_Fee: "",
    diag_Scan_Fee: "",
    presc_Medication: "",
    tax: "",
    total_Amount: "",
  };
  const [inputData, setInsputData] = useState(data);

  function handleData(e) {
    setInsputData({ ...inputData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (
      !inputData.invoiceNumber ||
      !inputData.invoiceDate ||
      !inputData.dueDate ||
      !inputData.consultation_Fee ||
      !inputData.diag_Scan_Fee ||
      !inputData.diag_Tests_Fee ||
      !inputData.presc_Medication ||
      !inputData.tax ||
      !inputData.total_Amount
    ) {
      alert("All Fields are Mandatory");
    } else {
      const url = "https://localhost:7018/api/HealthProvider/createinvoice";
      const data = {
        request_Id: x.request_Id,
        invoiceNumber: inputData.invoiceNumber,
        invoiceDate: inputData.invoiceDate,
        dueDate: inputData.dueDate,
        consultation_Fee: inputData.consultation_Fee,
        diag_Tests_Fee: inputData.diag_Tests_Fee,
        diag_Scan_Fee: inputData.diag_Scan_Fee,
        presc_Medication: inputData.presc_Medication,
        tax: inputData.tax,
        total_Amount: inputData.total_Amount,
      };
      axios
        .post(url, data)
        .then((result) => {
          console.log(result);
          navigate("/");
        })
        .catch((error) => {
          console.log(x.request_Id);
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
        <h1 className="text-2xl dark:text-white font-bold m">Create Invoice</h1>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">Plan Name</label>
          <input
            className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-800 focus:outline-none"
            type="text"
            placeholder="Enter plan invoicenumber"
            name="invoiceNumber"
            value={inputData.invoiceNumber}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">Invoice Date</label>
          <input
            className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-800 focus:outline-none"
            type="date"
            placeholder="Enter invoiceDate"
            name="invoiceDate"
            value={inputData.invoiceDate}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">Due Date</label>
          <input
            className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-300 focus:outline-none"
            type="date"
            placeholder="Enter dueDate"
            name="dueDate"
            value={inputData.dueDate}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">consultation_Fee</label>
          <input
            className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-300 focus:outline-none"
            type="text"
            placeholder="Enter consultation_Fee"
            name="consultation_Fee"
            value={inputData.consultation_Fee}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">diag_Tests_Fee</label>
          <input
            className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-300 focus:outline-none"
            type="text"
            placeholder="Enter diag_Tests_Fee"
            name="diag_Tests_Fee"
            value={inputData.diag_Tests_Fee}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">diag_Scan_Fee</label>
          <input
            className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-300 focus:outline-none"
            type="text"
            placeholder="Enter diag_Scan_Fee"
            name="diag_Scan_Fee"
            value={inputData.diag_Scan_Fee}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">presc_Medication</label>
          <input
            className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-300 focus:outline-none"
            type="text"
            placeholder="Enter presc_Medication"
            name="presc_Medication"
            value={inputData.presc_Medication}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">tax</label>
          <input
            className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-300 focus:outline-none"
            type="text"
            placeholder="Enter tax"
            name="tax"
            value={inputData.tax}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">Total Amount</label>
          <input
            className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-300 focus:outline-none"
            type="text"
            placeholder="Enter payment"
            name="total_Amount"
            value={inputData.total_Amount}
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
