import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';

const Card = ({ product }) => {
    // const { image, title, rating, price } = product;
  const { dispatch } = useStateContext();
  return (
    <div className="shadow-md hover:shadow-xl transform transition hover:scale-105 outline-1 outline-info w-60 p-4 rounded-lg">
      <img src={product?.image} className="h-40 mx-auto my-4" alt="" />
      <h1 className="truncate font-semibold text-paragraph mb-2">{product.title}</h1>
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-info font-bold">${product?.price}</h1>
        <div className="flex items-center gap-1">
          <AiFillStar className="text-yellow-500" />
          <h1 className='text-paragraph'>{product?.rating?.rate}</h1>
        </div>
      </div>
      <div className="flex  items-center">
        <button onClick={()=>dispatch({type:"ADD_TO_CART",payload:product})} className="bg-info transform transition hover:scale-95 text-primary mr-4 text-sm px-4 py-2 rounded-md">
          Add to Cart
        </button>
        <Link to={`/detail/${product.id}`}>
          <button className=" text-info transform transition hover:scale-95 outline-1 outline outline-info text-sm px-4 py-2 rounded-md">
          Details
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Card