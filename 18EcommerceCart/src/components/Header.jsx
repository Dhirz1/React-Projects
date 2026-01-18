import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
    const {carts} = useSelector((state) => state.allCart)
    console.log(carts)
    return (
        <div className='flex justify-between items-center py-4 bg-purple-700 text-white'>
            <div className="left">
                <div className="logo p-2 ml-4">
                    <Link to={"/"} className='text-4xl font-bold font-serif cursor-pointer'>Ecommerce</Link>
                </div>
            </div>
            <div className="right">
                <div className="cart p-2 mr-4">
                    <Link to={"/CartDetails"} className='text-3xl cursor-pointer'><FaCartShopping /></Link>
                </div>
            </div>
        </div>
    )
}

export default Header
