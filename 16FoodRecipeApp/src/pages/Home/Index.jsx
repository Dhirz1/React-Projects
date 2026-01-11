import { useContext } from "react"
import {GlobalContext} from "../../context/Index";
import RecipeItem from "../../components/RecipeItem";


export default function Home() {
    const context = useContext(GlobalContext)
    if (!context) {
        throw new Error("Navbar must be used inside GlobalState");
    }
    const { recipeList, loading } = context

    if (loading) {
        return <div className="h-full text-center text-3xl font-semibold">Data is Loading..... ! Please Wait</div>
    }

    // console.log(recipeList)

    
    return <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {
            recipeList && recipeList.length > 0 ?
                recipeList.map((item,index) => <RecipeItem key={index} item={item} />)
                : <div>
                    <p className="lg:text-4xl text-xl text-center text-black font-bold">Nothing To Show ! Please Search Something</p>
                </div>
        }

    </div>
}