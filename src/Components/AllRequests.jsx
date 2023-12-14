import axios from 'axios';
import React, { useEffect,useState } from 'react'
import Requests from './Requests';

function AllRequests() {
    const url="https://localhost:7018/api/Request";
    const [ data, setData ] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((result) => {
        setData(result.data);
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className='flex flex-col'>
      {data.map((x,index)=>(
                    <Requests key={index} x={x}></Requests>
                ))}
    </div>
  )
}

export default AllRequests
