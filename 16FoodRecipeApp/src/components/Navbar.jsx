import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { GlobalContext } from '../context/Index';

function Navbar() {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("Navbar must be used inside GlobalState");
  }
  const { searchParam, setSearchParam, handleSubmit } = context;

  // console.log(searchParam)


  return (
    <nav className='flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0'>
      <h2 className='text-3xl font-semibold'><NavLink to={"/"}>FoodRecipe</NavLink></h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name='Search'
          value={searchParam}
          onChange={event => setSearchParam(event.target.value)}
          placeholder='Enter Items...'
          className='bg-white p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200'
        />
      </form>
      <ul className=''>
        <li className='flex gap-5'>
          <NavLink to={"/"} className={"text-black hover:text-gray-700 duration-300"}>Home</NavLink>
          <NavLink to={"/favorites"} className={"text-black hover:text-gray-700 duration-300"}>Favorites</NavLink>
          <NavLink to={`/recipe-item/:id`} className={"text-black hover:text-gray-700 duration-300"}>Details</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
