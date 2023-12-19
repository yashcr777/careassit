import React from 'react'

function Singleplan() {
  return (
    <div>
    <div
      className="max-w-sm bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-col mt-10 ml-3">
      <img
        className="rounded-t-lg"
        src="https://t4.ftcdn.net/jpg/02/83/83/93/360_F_283839302_yt6JIsE96Pj4PydFDcBNKDUnuSpYB9h0.jpg"
        alt=""
      />
      <div className="p-5 flex-col">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
          Cancer
        </h2>
        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
            Plan For Cancer
        </p>
        <div className="flex mx-auto justify-between">
          <span className="text-red-800 font-bold">
            Duration: 5 Months
          </span>
          <span className="text-red-800 font-bold">
            Price: 500/month
          </span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Singleplan
