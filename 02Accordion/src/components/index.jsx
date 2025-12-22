import React from 'react'
import { useState } from 'react'
import data from "./data"

function Accordian() {
    const [selected, setSelected] = useState(null)

    function handleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

  return (
    <div className='wrapper bg-[#212121] text-3xl text-white w-full min-h-screen flex justify-center items-center flex-col' >
        <div className='accordian w-[70vw] flex justify-center items-center flex-col' >
        
            {
                
                data && data.length > 0 ? data.map(dataItem => <div className='item'  key={dataItem.id}>
                    <div onClick={()=>handleSelection(dataItem.id)} className="tittle w-[70vw] m-6 flex justify-between items-center" >
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        selected === dataItem.id ? 
                        <div className='content text-2xl text-gray-400'>
                            {dataItem.answer}
                        </div>
                        : null
                    }
                </div>)
                : <div>No data found !</div>
            }
        </div>
    </div>
  )
}

export default Accordian
