import { useState } from "react";
import Cardsdata from "./CardData";
import { addToCart } from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";

export default function Home() {  
  const [cardData, setCardData] = useState(Cardsdata);
  const dispatch = useDispatch()

  const sent = (e) => {
    dispatch(addToCart(e))
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      
      {/* GRID CONTAINER */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((element,index) => (
          <div
            key={element.id}
            className="bg-gray-100 shadow-lg rounded-xl overflow-hidden hover:scale-102 transition-transform duration-300"
          >
            {/* IMAGE */}
            <img
              src={element.imgdata}
              alt={element.dish}
              className="w-full h-48 object-cover cursor-pointer"
            />

            {/* CONTENT */}
            <div className="p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold">{element.dish}</h2>
                <span className="bg-green-500 text-white text-sm px-2 py-1 rounded">
                  {element.rating}
                </span>
              </div>

              <p className="text-sm text-gray-600 mt-1">
                {element.address}
              </p>

              <hr className="my-3" />

              <div className="flex justify-between items-center">
                <img width={22} src={element.arrimg} alt="" />
                <button
                onClick={()=>sent(element)}
                 className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded font-semibold cursor-pointer">
                  Add To Cart
                </button>
                <img width={50} src={element.delimg} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
