import React from "react";

function Providers({ x }) {
  return (
    <div className="mx-2 bg-green-500 flex mt-4 border border-gray-800 shadow dark:bg-gray-800 dark:border-gray-700 max-w-sm flex-col">
      <img
        className="rounded-t-lg"
        src="https://irp-cdn.multiscreensite.com/d8037e1a/dms3rep/multi/Functional+Medicine+Doctor+Chicago.jpeg"
        alt=""
      />
      <h2 class="p-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Helath Provider Name- {x.helathProvider_Name}
      </h2>
      <p className="p-2">Certificate Number is below</p>
      <div className="p-2 flex justify-between mt-2">
        <h3 className="mt-2 font-bold tracking-tight text-black-400 dark:text-black">
          {x.certificateNumber}
        </h3>
      </div>
    </div>
  );
}

export default Providers;
