import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false)
  const [recipeList, setRecipeList] = useState([])
  const [recipeDetailsData, setRecipeDetailsData] = useState(null)
  const [favoritesList, setFavoritesList] = useState([])

  const navigate = useNavigate()

  function handleAddToFavorites(getCurrentItem){
    console.log(getCurrentItem)
    let copyFavoritesList = [...favoritesList]
    const index = copyFavoritesList.findIndex(item=> item.id === getCurrentItem.id)

    if(index === -1){
      copyFavoritesList.push(getCurrentItem)
    }
    else{
      copyFavoritesList.splice(index)
    }
    setFavoritesList(copyFavoritesList)
  }

  console.log(favoritesList, recipeList)

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      setLoading(true)
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)

      const data = await response.json()

      // console.log(data)

      if (data?.data) {
        setRecipeDetailsData(data?.data)
      }

      if (data && data.data.recipes) {
        setRecipeList(data.data.recipes)
        setSearchParam("")
        setLoading(false)
        navigate("/")

      }

    } catch (e) {
      console.log(e)
      setLoading(false)
      setSearchParam("")

    }
  }


  return (
    <GlobalContext.Provider value={{ searchParam, favoritesList, setFavoritesList, loading, recipeList, setSearchParam, handleSubmit, recipeDetailsData, setRecipeDetailsData,handleAddToFavorites }}>
      {children}
    </GlobalContext.Provider>
  );
}
