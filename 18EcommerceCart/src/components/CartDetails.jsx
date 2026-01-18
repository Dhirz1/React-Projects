import React from "react";
import { MdDelete } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { incrementQty, decrementQty, deleteItem, emptyCart } from "../redux/features/cartSlice";

function CartDetails() {
    // ⚠️ reducer key confirm kar lena (cart / allCart)
    const { carts } = useSelector((state) => state.allCart);
    const dispatch = useDispatch()

    // total items
    const totalItems = carts.length;

    // total price
    const totalPrice = carts.reduce(
        (total, item) => total + Number(item.price) * Number(item.qnty),
        0
    );

    return (
        <>
            <div className="flex justify-center items-center flex-col m-10">
                {/* HEADER */}
                <div className="flex w-[65vw] items-center justify-between py-6 px-4 rounded-t-xl bg-black text-white">
                    <h1 className="text-3xl">
                        Cart Calculation ({totalItems})
                    </h1>

                    {carts.length > 0 && (
                        <button className="flex justify-center items-center gap-2 py-3 px-2 rounded bg-[#FF6958] font-semibold cursor-pointer" onClick={()=>dispatch(emptyCart())}>
                            <MdDelete /> Empty Cart
                        </button>
                    )}
                </div>

                {/* CART ITEMS */}
                {carts.length > 0 ? (
                    <div className="w-[65vw]">
                        <table className="w-full border-collapse text-xl">
                            <thead>
                                <tr className="border-b">
                                    <th className="px-4 py-2 text-left">Action</th>
                                    <th className="px-4 py-2 text-left">Product</th>
                                    <th className="px-4 py-2 text-left">Name</th>
                                    <th className="px-4 py-2 text-left">Price</th>
                                    <th className="px-4 py-2 text-right">Qty</th>
                                    <th className="px-4 py-2 text-right">Total</th>
                                </tr>
                            </thead>

                            <tbody>
                                {carts.map((data, index) => (
                                    <tr
                                        key={index}
                                        className="border-b hover:bg-gray-50"
                                    >
                                        {/* DELETE */}
                                        <td className="px-4 py-3">
                                            <button className="cursor-pointer bg-red-400 py-2 px-2 rounded text-white hover:bg-red-500" onClick={()=>dispatch(deleteItem(data.id))}>
                                                <MdDelete size={18} />
                                            </button>
                                        </td>

                                        {/* IMAGE */}
                                        <td className="px-4 py-3">
                                            <div className="w-16 h-16 overflow-hidden rounded border">
                                                <img
                                                    src={data.imgdata}
                                                    alt={data.dish}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </td>

                                        {/* NAME */}
                                        <td className="px-4 py-3 font-medium text-gray-800">
                                            {data.dish}
                                        </td>

                                        {/* PRICE */}
                                        <td className="px-4 py-3 text-gray-700">
                                            ₹ {Number(data.price)}
                                        </td>

                                        {/* QUANTITY */}
                                        <td className="px-4 py-3 ml-3">
                                            <div className="flex items-center border rounded w-max">
                                                <button className="px-3 py-1 text-gray-600 cursor-pointer" onClick={()=>dispatch(decrementQty(data.id))}> 
                                                    −
                                                </button>

                                                <span className="px-4">
                                                    {data.qnty}
                                                </span>

                                                <button className="px-3 py-1 text-gray-600 cursor-pointer" onClick={()=>dispatch(incrementQty(data.id))}> 
                                                    +
                                                </button>
                                            </div>
                                        </td>

                                        {/* TOTAL */}
                                        <td className="px-4 py-3 text-right font-semibold">
                                            ₹ {Number(data.price) * Number(data.qnty)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                            {/* FOOTER */}
                            <tfoot>
                                <tr className="bg-gray-100 border-t">
                                    <th colSpan={4}></th>

                                    <th className="px-4 py-4 text-left font-semibold">
                                        Items :
                                        <span className="mx-2 text-red-500">
                                            {totalItems}
                                        </span>
                                    </th>

                                    <th className="px-4 py-4 text-right font-semibold">
                                        Total :
                                        <span className="mx-2 text-red-500">
                                            ₹ {totalPrice}
                                        </span>
                                    </th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                ) : (
                    // EMPTY CART
                    <div className="bg-gray-600 w-[65vw] text-[#D3D5D7] flex justify-center items-center flex-col rounded-b-xl h-[50vh]" >
                        <span className="text-4xl font-bold">
                            <FaShoppingCart />
                        </span>
                        <span className="mt-2 text-lg">
                            Your Cart Is Empty
                        </span>
                    </div>
                )}
            </div>
        </>
    );
}

export default CartDetails;
