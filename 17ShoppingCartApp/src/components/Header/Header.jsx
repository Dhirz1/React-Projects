import { Link } from "react-router-dom"



export default function Header(){

    return <div>
        <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
            <Link to={"/"}>
                <div className="ml-5 ">
                    <h1 className="text-red-900 text-black font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">REACT REDUX SHOPPING CARD</h1>
                </div>
            </Link>
            <ul className="flex items-center space-x-6 text-gray-800 font-semibold list-none">
                <Link to={"/"}>
                    <li className="cursor-pointer">Home</li>
                </Link>
                <Link to={"/card"}>
                    <li className="cursor-pointer">Card</li>
                </Link>
            </ul>
        </nav>
    </div>
}