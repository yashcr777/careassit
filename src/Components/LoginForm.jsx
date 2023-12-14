import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
function LoginForm() {
  const navigate = useNavigate();
  const data = { email: "", password: "" };
  const [inputData, setInsputData] = useState(data);
  const [visible,setVisible]=useState(true);
  const [flag, setFlag] = useState();
  // useEffect(()=>{
  //     console.log("Registered")
  // },[flag])
  function handleData(e) {
    setInsputData({ ...inputData, [e.target.name]: e.target.value });
    //console.log(inputData)
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.email || !inputData.password) {
      alert("All Fields are Mandatory");
    } else {
      const url = `https://localhost:7018/api/Login/Login?email=${inputData.email}&password=${inputData.password}`;
      const data = {
        email: inputData.email,
        password: inputData.password,
      };
      axios
        .post(url, data)
        .then((result) => {
          setFlag(true);
          console.log(result);
          document.cookie = "token=" + result.data.token;
          document.cookie = "Role=" + result.data.role;
          localStorage.setItem("id", JSON.stringify(result.data.id));
          navigate("/Dashboard");
          window.location.reload();
        })
        .catch((error) => {
          navigate("/signup");
          console.log(error);
        });
    }
  }
  return (
    <div>
      <Navbar/>
    <div className="flex flex-col bg-no-repeat bg-cover w-full h-screen justify-center items-center ">
      <div>
        <pre>
          {flag ? (
            <h2 className="ui-define">
              Hello {inputData.name} Login Successfully
            </h2>
          ) : (
            <h2 className="text-4xl text-indigo-500">LOGIN IN</h2>
          )}
        </pre>
      </div>
      <form
        className="max-w-[400px] w-full max-auto bg-green-200 p-8 px-8 rounded-lg border-solid border-2 border-indigo-400"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl dark:text-white font-bold my-2">LOGIN FORM</h1>
        <div className="flex flex-col text-black-600 py-2">
          <label className="font-bold">Email</label>
          <input
            className="rounded-lg bg-yellow-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-100 border-solid border-2 border-black"
            type="text"
            placeholder="Enter Your Email"
            name="email"
            value={inputData.email}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-600 py-2">
          <label className="font-bold">Password</label>
          <input
            className="rounded-lg bg-yellow-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-100 focus:outline-none border-solid border-2 border-black"
            type={visible?"password":"text"}
            placeholder="Enter Your Password"
            name="password"
            value={inputData.password}
            onChange={handleData}
          ></input>
        </div>
        <button className="rounded-lg w-full my-5 py-2 bg-teal-500" type="submit">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}

export default LoginForm;
