import React, { useEffect, useState } from "react";
import axios from "axios";
function Form() {
  const data = { name: "", email: "", password: "",confirmpassword:"" };
  const [inputData, setInsputData] = useState(data);
  const [flag, setFlag] = useState(false);

  // useEffect(()=>{
  //     console.log("Registered")
  // },[flag])
  // useEffect(()=>{
  //     axios.get('https://localhost:7018/api/User')
  //     .then((result)=>{
  //         console.log(result.data)
  //     })
  //     .catch((error)=>{
  //         console.log(error)
  //     })
  // },[])

  function handleData(e) {
    setInsputData({ ...inputData, [e.target.name]: e.target.value });
    // console.log(inputData)
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password || !inputData.confirmpassword) {
      alert("All Fields are Mandatory");
    }
    else if(inputData.confirmpassword!=inputData.password)
    {
      alert("Enter Password Correctly");
    }
    else {
      const url = "https://localhost:7018/api/SignUp/UserStoreSignup";
      const data = {
        email: inputData.email,
        password: inputData.password,
        user_Name: inputData.name,
      };
      axios
        .post(url, data)
        .then((result) => {
          setFlag(true);
          console.log("Registered Successfully");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  return (
    <div className="flex flex-col bg-no-repeat bg-cover bg-center w-full h-screen justify-center items-center">
      <div>
        <pre>
          {flag ? (
            <h2 className="ui-define">
              Hello {inputData.name} You have Registered Successfully
            </h2>
          ) : (
            ""
          )}
        </pre>
      </div>
      <form
      className="max-w-[400px] w-full max-auto bg-green-200 p-8 px-8 rounded-lg border-solid border-2 border-indigo-400"
        // className="border-4 border-indigo-600  max-w-[500px] w-full max-auto bg-blue-400 p-8 px-8 rounded-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl dark:text-white font-bold m">Sign up</h1>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">User Name</label>
          <input
            // className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-800 focus:outline-none"
            className="rounded-lg bg-yellow-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-100 border-solid border-2 border-black"
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={inputData.name}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">Email</label>

          <input
            // className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-800 focus:outline-none"
            className="rounded-lg bg-yellow-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-100 border-solid border-2 border-black"
            type="text"
            placeholder="Enter Your Email"
            name="email"
            value={inputData.email}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">Password</label>
          <input
            // className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-300 focus:outline-none"
            className="rounded-lg bg-yellow-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-100 border-solid border-2 border-black"
            type="text"
            placeholder="Enter Your Password"
            name="password"
            value={inputData.password}
            onChange={handleData}
          ></input>
        </div>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">Confirm Password</label>
          <input
            // className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-300 focus:outline-none"
            className="rounded-lg bg-yellow-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-100 border-solid border-2 border-black"
            type="text"
            placeholder="Enter Your Password"
            name="confirmpassword"
            value={inputData.confirmpassword}
            onChange={handleData}
          ></input>
        </div>
        <button className="rounded-lg w-full my-5 py-2 bg-teal-500" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
