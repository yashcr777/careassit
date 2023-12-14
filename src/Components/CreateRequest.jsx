import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
function CreateRequests({ id1 }) {
  const location = useLocation();
  const plan = location.state;
  const navigate = useNavigate();
  const [healthData, setHealthData] = useState([]);
  var id = JSON.parse(localStorage.getItem("id"));
  var insurancePlan_Id = plan.insurancePlan_Id;
  var user_Id = id;
  const data = {health_Id:"",docUrl:""};
  useEffect(() => {
    console.log(plan.insurancePlan_Id);
    console.log(id);
    axios
      .get("https://localhost:7018/api/HealthProvider/all")
      .then((result) => {
        console.log(result.data);
        setHealthData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [inputData, setInputData] = useState(data);
  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    //console.log(inputData)
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.docUrl || !inputData.health_Id) {
      alert("All Fields are Mandatory");
    } else {
      const url = "https://localhost:7018/api/User/CreateRequest";
      const data1 = {
        insurancePlan_Id: insurancePlan_Id,
        user_Id: id,
        health_Id: inputData.health_Id,
        docUrl:inputData.docUrl,
      };
      console.log(data1);
      axios
        .post(url, data1)
        .then((result) => {
          console.log(id);
          //   console.log(token)
          console.log(result);
          navigate("/getallrequests");
        })
        .catch((error) => {
          console.log(id);
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
        <h1 className="text-2xl dark:text-white font-bold m">Create Request</h1>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">Health Provider Name</label>
          <select value={inputData.health_Id} onChange={handleData} name="health_Id" className="rounded-lg bg-yellow-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-800 focus:outline-none">
            {healthData.map((x) => (
              <option key={x.health_Id} value={x.health_Id}>
                {x.helathProvider_Name}
              </option>
            ))}
          </select>
          <input
            className="rounded-lg bg-yellow-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-800 focus:outline-none"
            type="text"
            placeholder="Enter Your Doclink"
            name="docUrl"
            value={inputData.docUrl}
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

export default CreateRequests;
