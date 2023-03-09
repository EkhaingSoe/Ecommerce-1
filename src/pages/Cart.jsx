import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Cartitem from '../components/Cartitem';
import { useStateContext } from '../context/StateContext'

const Cart = () => {
  const { state: { cart }, dispatch } = useStateContext();
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const checkOutHandler = () => {
    dispatch({ type: "EMPTY" });
    navigate("/success");
  }
  useEffect(() => {
    setTotal(cart.reduce((pv,cv)=>pv+cv.price,0))
  }, [])
  const increasePrice = (price) => {
    setTotal(total + price);
  }
  const decreasePrice = (price) => {
    setTotal(total - price);
  };
 
  return (
    <>
      {cart.length > 0 ? (
        <div className="flex justify-around ">
          <div className="">
            {cart?.map((item) => (
              <Cartitem key={item.id} item={item} increasePrice={increasePrice} decreasePrice={decreasePrice} />
            ))}
          </div>
          <div className="outline outline-info h-56 flex flex-col p-20 justify-center items-center">
            <h1 className="text-xl font-semibold mb-3">Total Price - ${total.toFixed(2)}</h1>
            <div>
              <button
                onClick={checkOutHandler}
                className="bg-info px-5 py-2 mr-3 transform transition hover:scale-105"
              >
                Checkout
              </button>

              <button
                onClick={() => dispatch({ type: "EMPTY" })}
                className="bg-red-500 text-white px-5 py-2 transform transition hover:scale-105"
              >
                Cart Empty
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center ">
          <div className="border p-6 text-center shadow-2xl w-1/2">
            <h1 className="text-4xl  text-bold text-info mb-4">
              Your Cart is empty
            </h1>
            <button
              onClick={() => navigate("/")}
              className="bg-info px-5 py-2 text-sm rounded-full "
            >
              Go Shopping
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart