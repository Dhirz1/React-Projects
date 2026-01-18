import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CartTile from "../components/cart-tile/Index"


export default function Card() {
    const [totalCart, setTotalCart] = useState(0)

    const cart = useSelector(state => state.cart)


    useEffect(() => {
        setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0))
    }, [cart])
    return <div className="flex">
        {
            cart && cart.length ?
                <>
                    <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
                        <div className="flex flex-col justify-center items-center p-3">
                            {
                                cart.map(cartItem => <CartTile cartItem={cartItem} />)
                            }
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
                        <h1 className="font-bold text-lg text-red-800">Your Cart Summary</h1>
                        <p>
                            <span className="text-gray-800 font-bold">Total Item</span>
                            <span>: {cart.length}</span>
                        </p>
                        <p>
                            <span className="text-gray-800 font-bold">Total Amount</span>
                            <span>: {totalCart}</span>
                        </p>
                    </div>
                </>
                :
                <div className="min-h-[80vh] w-full flex flex-col justify-center items-center">
                    <h1 className="text-gray-800 font-bold text-xl mb-2">Your Cart is empty</h1>
                    <Link to={"/"}>
                        <button className="bg-red-950 text-white border-2 rounded-lg font-bold px-8 py-3 cursor-pointer">SHOP NOW</button>
                    </Link>
                </div>
        }
    </div>
}