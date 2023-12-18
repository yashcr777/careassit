import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../utils";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function UserDashboardUpdateForm() {
  const navigate = useNavigate();

  const data = {
    name: "",
    contactNumber: "",
    address: "",
    blood_Group: "",
    gender: "",
    dob: null,
    description: "",
  };
  const [inputData, setInsputData] = useState(data);
  useEffect(() => {
    var id = JSON.parse(localStorage.getItem("id"));
    const url = `https://localhost:7018/api/User/${id}`;
    axios
      .get(url)
      .then((result) => {
        console.log(result);
        setInsputData({
          name: result.data.name,
          contactNumber: result.data.contactNumber,
          address: result.data.address,
          blood_Group: result.data.blood_Group,
          gender: result.data.gender,
          dob: result.data.dob,
          description: result.data.description,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [flag, setFlag] = useState(false);
  function handleData(e) {
    setInsputData({ ...inputData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (
      !inputData.name ||
      !inputData.contactNumber ||
      !inputData.address ||
      !inputData.blood_Group ||
      !inputData.gender ||
      !inputData.dob ||
      !inputData.description
    ) {
      alert("All Fields are Mandatory");
    } else {
      setFlag(true);
      var id = JSON.parse(localStorage.getItem("id"));
      const url = `https://localhost:7018/api/User/${id}`;
      var token = getCookie("token");
      // const token = `Authorization: Bearer ${token}`;
      const data = {
        name: inputData.name,
        contactNumber: inputData.contactNumber,
        dob: inputData.dob,
        gender: inputData.gender,
        description: inputData.description,
        address: inputData.address,
        blood_Group: inputData.blood_Group,
      };
      axios
        .put(url, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((result) => {
          console.log(id);
          console.log(token);
          console.log(result);
          navigate("/dashboard");
        })
        .catch((error) => {
          console.log(id);
          console.log(error);
        });
    }
  }
  return (
    <div className="flex flex-col bg-no-repeat bg-cover w-full justify-center items-center">
      <h2 className="text-2xl text-indigo-500">Hi User,</h2>
      <h3 className="text-xl text-indigo-500">Update Your Details</h3>
      <form
        className="max-w-[400px] w-full max-auto bg-green-200 p-8 px-8 rounded-lg "
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">Name</label>
          <input
            className="rounded-lg bg-yellow-100 mt-2 p-2 border-solid border-2 border-indigo-500  focus:outline-none"
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={inputData.name}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">Mobile Number</label>
          <input
            className="rounded-lg bg-yellow-100 mt-2 p-2 border-solid border-2 border-indigo-500 focus:outline-none"
            type="text"
            placeholder="Enter Your Mobile Number"
            name="contactNumber"
            value={inputData.contactNumber}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">Address</label>
          <input
            className="rounded-lg bg-yellow-100 mt-2 p-2 border-solid border-2 border-indigo-500 focus:outline-none"
            type="text"
            placeholder="Enter Your Address"
            name="address"
            value={inputData.address}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">Bloodtype</label>
          <input
            className="rounded-lg bg-yellow-100 mt-2 p-2 border-solid border-2 border-indigo-500 focus:outline-none"
            type="text"
            placeholder="Enter Your Bloodtype"
            name="blood_Group"
            value={inputData.blood_Group}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">Gender</label>
          <input
            className="rounded-lg bg-yellow-100 mt-2 p-2 border-solid border-2 border-indigo-500 focus:outline-none"
            type="text"
            placeholder="Enter Your Gender"
            name="gender"
            value={inputData.gender}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">Dob</label>
          <input
            className="rounded-lg bg-yellow-100 mt-2 p-2 border-solid border-2 border-indigo-500 focus:outline-none"
            type="date"
            placeholder="Enter Your dob"
            name="dob"
            value={inputData.dob}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">Description</label>
          <input
            className="rounded-lg bg-yellow-100 mt-2 p-2 border-solid border-2 border-indigo-500 focus:outline-none"
            type="text"
            placeholder="Enter Your dob"
            name="description"
            value={inputData.description}
            onChange={handleData}
          ></input>
        </div>
        <button className="w-full my-5 py-2 bg-teal-500" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserDashboardUpdateForm;
