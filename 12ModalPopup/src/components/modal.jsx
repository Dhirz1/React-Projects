import React from 'react'

function Modal({id, header, body, footer}) {
  return (
    <div className='modal' id={id || "Modal"}>
       <div className='content'>
            <div className="header">
                <span className='close-modal-icon'>&times;</span>
                <h2 className='font-bold text-2xl m-3'>{header ? header : "Header"}</h2>
            </div>
            {
                body ? body : <div className='m-3 font-extrabold'>
                    <p>This is our Modal Body</p>
                </div>
            }
            <div className="footer">
                {
                    footer ? footer :  <h2>Footer</h2>
                }
            </div>
       </div>
       
    </div>
  )
}

export default Modal
