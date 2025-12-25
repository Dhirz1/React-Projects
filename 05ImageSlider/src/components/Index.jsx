import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, setLoading] = useState(false)

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ?
      images.length - 1
      :
      currentSlide - 1
    )
  }

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
  }

  async function fetchImage(getUrl) {
    setLoading(true)
    try {
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
      const data = await response.json()

      if (data) {
        setImages(data)
        setLoading(false)
      }
    } catch (e) {
      setErrorMsg(e.message)
      setLoading(false)
    }

  }

  useEffect(() => {
    if (url) fetchImage(url)
  }, [url])

  // console.log(images)

  if (loading) {
    return <div>Data Loading ! Please Wait....</div>
  }
  if (errorMsg !== null) {
    return <div>Error : {errorMsg}</div>
  }

  return (
    <div className="container relative flex flex-row justify-center items-center w-[600px] h-[450px]">
      <BsArrowLeftCircleFill onClick={handlePrevious} className='arrow left-[1rem] absolute w-[2rem]  h-[2rem] arrow-left' />
      {
        images && images.length ?
          images.map((imagesItem, index) => (
            <img
              key={imagesItem.id}
              alt={imagesItem.download_url}
              src={imagesItem.download_url}
              className={currentSlide === index ? "current-image rounded-[0.5rem] shadow-[0_0_7px_#666] h-[100%] w-[100%]" : "hide-current-image hidden"}
            />
          ))
          : null
      }
      <BsArrowRightCircleFill onClick={handleNext} className='arrow absolute right-[1rem] w-[2rem] h-[2rem] arrow-right' />

    </div>
  )

}

export default ImageSlider
