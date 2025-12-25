import React, { useEffect, useState } from 'react'
import "./style.css"

function LoadMoreButton() {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [disableButton, setDisableButton] = useState(false)

    async function fetchProducts() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)

            const data = await response.json()

            if (data && data.products && data.products.length) {
                setProducts((prevData) => [...prevData, ...data.products])
                setLoading(false)
            }

            console.log(data)

        }
        catch (e) {
            console.log(e)
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchProducts()
    },[count])

    useEffect(()=>{
        if(products && products.length === 100) setDisableButton(true)
    },[products])

    if (loading) {
        return <div className='load-more-container'>Data Loading ! Please Wait Few Seconds</div>
    }
    return (
        <div className='load-more-container'>
            <div className="products-container">
                {
                    products && products.length ? products.map((item) => (
                        <div key={item.id} className='product'>
                            <img
                            src={item.thumbnail}
                            alt={item.title}
                            />
                            <p>{item.title}</p>
                        </div>
                    )) : null
                }
            </div>
            <div className='button-container'>
                <button disabled={disableButton} onClick={()=>setCount(count+1)} className='text-white font-bold py-2 px-4 bg-red-600 rounded-[8px] cursor-pointer'>Load More Products</button>
            </div>
        </div>
    )
}

export default LoadMoreButton
