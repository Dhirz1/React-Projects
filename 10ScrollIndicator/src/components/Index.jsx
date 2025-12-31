import React, { useEffect, useState } from 'react'
import "./style.css"

function ScrollIndicator({ url }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setErrorMessage] = useState("")
  const [scrollPercentage, setScrollPercentage] = useState(0)

  async function FetchData(geturl) {
    setLoading(true)
    try {
      const respone = await fetch(geturl)
      const data = await respone.json()
      setData(data.products)
      console.log(data)
      setLoading(false)
    }
    catch (e) {
      setLoading(true)
      console.log(e)
      setErrorMessage(e.message)
      setLoading(false)
    }
  }

  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    )

    const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

    setScrollPercentage((howMuchScrolled / height) * 100)
  }

  useEffect(() => {
    FetchData(url)
  }, [url])

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage)
    return () => {
      window.removeEventListener("scroll", () => { })
    }
  })

  console.log(data, scrollPercentage)

  if (loading) {
    return <div>
      <p>Data Loading ! Please Wait</p>
    </div>
  }
  if (error) {
    return <div>
      <p>Error: {error}</p>
    </div>
  }
  return (
    <div>
      <div className='top-container'>
        <h1 className=''>Custom Products</h1>
        <div className='scroll-progress-tracking-container'>
          <div className='current-progress-bar' style={{ width: `${scrollPercentage}%` }}></div>
        </div>

      </div>
      <div className='data-container'>
        {
          data && data.length > 0 ? data.map(dataItem => (
            <p key={dataItem.id}>{dataItem.title}</p>
          )) : null
        }
      </div>
    </div>
  )
}

export default ScrollIndicator
