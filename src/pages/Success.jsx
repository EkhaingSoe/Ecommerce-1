import React from 'react'
import { useNavigate } from 'react-router-dom';

const Success = () => {
    const navigate = useNavigate();
    return (
      <div className='flex justify-center items-center '>
        <div className="border p-6 text-center shadow-2xl w-1/2">
          <h1 className="text-4xl  text-bold text-info mb-4">
            Thank you for shopping
          </h1>
          <button onClick={()=>navigate("/")} className="bg-info px-5 py-2 text-sm rounded-full ">
            Go Shopping
          </button>
        </div>
      </div>
    );
}

export default Success