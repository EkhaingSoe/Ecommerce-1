import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom'
import { getData } from '../api';
import { useStateContext } from '../context/StateContext';
import Spinner from '../components/Spinner/Spinner';

const ProductDetail = () => {
  const { id } = useParams();
  const { dispatch } = useStateContext();
    const [product, setProduct] = useState({});
    const [products, setProducts] = useState([]);
    const getProductDetail = async () => {
        const data = await getData(`/products/${id}`)
        setProduct(data);
    }
    const getProductByCategory = async () => {
      const databyCategory = await getData(`/products/category/${product.category}`)
      const filterData = databyCategory?.filter(item => item.id !== product.id);
      console.log(filterData);
        setProducts(filterData);
    }
    useEffect(() => {
        getProductDetail();
    }, [product])
    useEffect(() => {
        getProductByCategory();
        
    },[products])
  return (
    <>
      {product && products.length > 0 ? (
        <div>
          <div className="flex gap-6 ">
            <img
              src={product?.image}
              className="h-64 border p-4 shadow-lg "
              alt=""
            />
            <div className="">
              <button className="bg-info mb-4 text-white text-xs px-6 py-1 rounded-full font-semibold">
                {product?.category}
              </button>
              <h1 className="mb-4 text-lg font-bold text-header tracking-wide">
                {product?.title}
              </h1>
              <h1 className="mb-3 text-sm  font-semibold tracking-wide">
                Description
              </h1>
              <h1 className="mb-4 text-xs text-paragraph tracking-wider">
                {product?.description}
              </h1>
              <div className="flex gap-2 items-center mb-4">
                <h1 className="text-info font-bold">${product?.price} (</h1>
                <AiFillStar className="text-yellow-500" />
                <AiFillStar className="text-yellow-500" />
                <AiFillStar className="text-yellow-500" />
                <AiFillStar className="text-yellow-500" />
                <h1>{product?.rating?.rate} )</h1>
              </div>
              <button
                onClick={() =>
                  dispatch({ type: "ADD_TO_CART", payload: product })
                }
                className="bg-info mr-4 text-white text-sm px-6 py-2 rounded-md"
              >
                Add to Cart
              </button>
              <Link to="/success">
                <button className=" px-6 py-2 rounded-md text-info text-sm outline-1 outline outline-info">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
          <div className="my-10">
            <h1 className="mb-6 font-bold">You may also know</h1>
            <div className="flex flex-wrap gap-5 ">
              {products?.map((item) => (
                <div
                  onClick={() => setProduct(item)}
                  className="border p-4 shadow-lg"
                  key={item.id}
                >
                  <img src={item.image} className="h-48" alt="" />
                  <div className="flex justify-evenly mt-4 item-center">
                    <h1 className="text-info font-bold">${item.price}</h1>
                    <div className="flex  items-center gap-2">
                      <AiFillStar className="text-yellow-500" />
                      <h1>{item.rating.rate}</h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default ProductDetail