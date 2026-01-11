import { useContext } from "react";
import { GlobalContext } from "../../context/Index";
import RecipeItem from "../../components/RecipeItem";

export default function Favorites(){
    const context = useContext(GlobalContext)
        if (!context) {
            throw new Error("Navbar must be used inside GlobalState");
        }
        const { favoritesList } = context
    
        // console.log(recipeList)
    
        
        return <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
            {
                favoritesList && favoritesList.length > 0 ?
                    favoritesList.map((item,index) => <RecipeItem key={index} item={item} />)
                    : <div>
                        <p className="lg:text-4xl text-xl text-center text-black font-bold">Nothing is added in favorites</p>
                    </div>
            }
    
        </div>
    }
