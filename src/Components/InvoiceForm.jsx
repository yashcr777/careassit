import React, { useEffect, useState } from "react";

function Form() {
  const data = { name: "", email: "", password: "" };
  const [inputData, setInsputData] = useState(data);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log("Registered");
  }, [flag]);
  function handleData(e) {
    setInsputData({ ...inputData, [e.target.name]: e.target.value });
    // console.log(inputData)
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All Fields are Mandatory");
    } else {
      setFlag(true);
    }
  }
  return (
    <div className="flex flex-colbg-no-repeat bg-cover bg-center w-full h-screen justify-center items-center">
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
        className="max-w-[500px] w-full max-auto bg-blue-400 p-8 px-8 rounded-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl dark:text-white font-bold m">Signup Form</h1>
        <div className="flex flex-col text-black-100 py-2">
          <label className="font-bold">User Name</label>
          <input
            className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-800 focus:outline-none"
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
            className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-800 focus:outline-none"
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
            className="rounded-lg bg-white-100 mt-2 p-2 focus:border-blue-500 focus:bg-blue-300 focus:outline-none"
            type="text"
            placeholder="Enter Your Password"
            name="password"
            value={inputData.password}
            onChange={handleData}
          ></input>
        </div>
        <button className="w-full my-5 py-2 bg-teal-200" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
