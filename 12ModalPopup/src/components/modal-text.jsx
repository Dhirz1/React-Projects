import React, { useState } from 'react'
import Modal from './modal'

function Modaltest() {
    const [showModalPopup , setShowModalPopup] = useState(false)

    function toggleModalPopup(){
        setShowModalPopup(!showModalPopup)
    }
  return (
    <div>
      <button onClick={toggleModalPopup}>Open Modal Popup</button>
      {
        showModalPopup && <Modal body={<div className='text-3xl font-bold'>This Is Our Random Components</div>}/>
      }
    </div>
  )
}

export default Modaltest
