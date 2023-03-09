import React, { useState } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { useStateContext } from '../context/StateContext';


const Cartitem = ({ item,increasePrice,decreasePrice }) => {
    const { dispatch } = useStateContext();
    const [qty, setQty] = useState(1);
    const increaseQty = () => {
        setQty(prev => prev + 1);
        increasePrice(item.price)
    }
    const decreaseQty = () => {
        if (qty > 1) {
            
            setQty((prev) => prev - 1);
            decreasePrice(item-price)
        }
    };
    const removeHandler = () => {
        decreasePrice(item?.price * qty);
        dispatch({ type: "REMOVE_FROM_CART", payload: item })
    }
  return (
    <div
      className="flex gap-5 items-center border p-6  mb-4 shadow-xl "
      key={item.id}
    >
      <img src={item.image} className="h-32" alt="" />
      <div>
        <h1>{item.title}</h1>
        <h1 className="text-info font-bold my-2">${item?.price * qty}</h1>

        <div className="flex mb-2">
          <button onClick={decreaseQty} className="bg-info px-2 outline outline-white outline-1">
            -
          </button>
          <button className="bg-info px-2 outline outline-white outline-1">
            {qty}
          </button>
          <button onClick={increaseQty} className="bg-info px-2 outline outline-white outline-1">
            +
          </button>
        </div>
        <button
          onClick={removeHandler }
        >
          <AiFillDelete className="text-red-600" />
        </button>
      </div>
    </div>
  );
}

export default Cartitem