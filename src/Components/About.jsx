import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <h1 className="text-4xl text-blue-500">Hello Welcome To About Page</h1>
      <Link to="/">
        <p className="text-4xl text-blue-500 underline hover:underline-offset-4">
          CareAssit
        </p>
      </Link>
    </div>
  );
}

export default About;
