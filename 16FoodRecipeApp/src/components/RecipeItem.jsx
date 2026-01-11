import { Link } from "react-router-dom"

export default function RecipeItem({ item }) {

    return <div className="border-black">
        <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
            <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
                <img src={item.image_url} alt="Recipe Item" className="block w-full" />
            </div>
        </div>
        <div className="w-80">
            <span className="text-sm text-cyan-700 font-medium">
                {item.publisher}
            </span>
            <h3 className="font-bold text-2xl truncate">{item.title}</h3>
            <Link
                to={`/recipe-item/${item.id}`}
                className="text-sm mt-5 p-3 px-8 rounded-lg font-medium tracking-wider inline-block shadow-md bg-black text-white"
            >Recipe Details</Link>
        </div>
    </div>
}