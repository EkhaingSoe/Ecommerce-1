import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { FiSearch } from "react-icons/fi"
import {BsShop} from "react-icons/bs"
import { Link } from 'react-router-dom'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
  const { search, setSearch,state:{cart} } = useStateContext();
  console.log(search);
  return (
    <nav className="flex justify-between items-center bg-gray-50 px-3 py-3 my-4 shadow-md rounded-md">
      <Link to="/">
        <div className="flex items-center gap-2">
          <BsShop className="text-info text-xl" />
          <h1 className="text-info font-bold">The Dawn</h1>
        </div>
      </Link>
      <div className="flex gap-4 ">
        <Link to="/cart">
          <div className="flex bg-primary text-info items-center gap-1  px-2 py-1 rounded-md">
            <AiOutlineShoppingCart />
            <small>{cart.length}</small>
          </div>
        </Link>
        <div className="flex items-center  gap-2 border outline outline-info outline-1 px-2 py-1 rounded-md">
          <FiSearch className="text-info" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            name=""
            id=""
            className="outline-none bg-transparent"
            placeholder="Search Products"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar