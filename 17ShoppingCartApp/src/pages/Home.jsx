import { useEffect, useState } from "react"
import { Circles } from "react-loader-spinner";
import ProductTile from "../components/Products-tile/Index";


export default function Home() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    async function fetchListOfProducts() {
        setLoading(true)
        const respone = await fetch("https://fakestoreapi.com/products")
        const data = await respone.json()
        console.log(data)

        if (data) {
            setLoading(false)
            setProducts(data)
        }
    }

    useEffect(() => {
        fetchListOfProducts()
    }, [])
    return <div className="flex flex-col items-center">
        {
            loading ?
                <div className="min-h-screen w-full flex justify-center items-center">
                    <Circles
                        height="100"
                        width="100"
                        color="rgb(127,29,29)"
                        visible={true}
                    />
                </div>
                : <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl">
                    {
                        products && products.length > 0 ? products.map(productItem => <ProductTile key={productItem.id} product={productItem} />)

                            : null
                    }

                </div>
        }
    </div>
}