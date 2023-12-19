import axios from 'axios';
import React from 'react'
import Navbar from './Navbar'
import {useState} from 'react'
function AddHealthProvider() {
  const data={
    email:"",
    password:"",
    confirmPassword:"",
    helathProvider_Name:"",
  };
  const [inputData, setInsputData] = useState(data);
  function handleData(e) {
    setInsputData({ ...inputData, [e.target.name]: e.target.value });
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.helathProvider_Name || !inputData.email || !inputData.password || !inputData.confirmPassword) {
      alert("All Fields are Mandatory");
    }
    else if(inputData.confirmPassword!=inputData.password)
    {
      alert("Enter Password Correctly");
    }
    else{
      const url = "https://localhost:7018/api/SignUp/StoreSignup";
      const data = {
        email: inputData.email,
        password: inputData.password,
        helathProvider_Name: inputData.helathProvider_Name,
      };
      axios
        .post(url, data)
        .then((result) => {
          console.log(result)
        })
        .catch((error) => {
          console.log(error);
        });
        url="https://localhost:7018/api/HealthProvider/createhealthprovider";
        axios
        .post(url, data)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  return (
    <div className="flex-col h-full justify-center items-center">
      <Navbar/>
      <form
        className="mx-auto mt-6 border-4 border-indigo-400  w-1/3 max-auto bg-blue-200 p-8 px-8 rounded-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl dark:text-white font-bold m">Add Health Provider</h1>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">User Name</label>
          <input
            className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500  focus:outline-none"
            type="text"
            placeholder="Enter health provider name"
            name="Health Provider Name"
            value={inputData.helathProvider_Name}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">Email</label>
          <input
            className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500  focus:outline-none"
            type="text"
            placeholder="Enter email"
            name="Health Provider Name"
            value={inputData.email}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">Password</label>
          <input
            className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500  focus:outline-none"
            type="text"
            placeholder="Enter password"
            name="Passowrd"
            value={inputData.password}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">Confirm Password</label>
          <input
            className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500  focus:outline-none"
            type="text"
            placeholder="Enter Password"
            name="Confirm Password"
            value={inputData.confirmPassword}
            onChange={handleData}
          ></input>
        </div>
        <button className="rounded-lg w-full my-5 py-2 bg-teal-500" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddHealthProvider
