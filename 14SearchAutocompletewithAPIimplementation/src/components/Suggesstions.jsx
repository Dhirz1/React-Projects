import React from 'react'

function Suggesstions({ data, handleClick }) {
    return (
        <div>
            {
                data && data.length ? data.map((item, index) => <li style={{ listStyle: "none" }} onClick={handleClick} key={index}>{item}</li>)
                    : null
            }
        </div>
    )
}

export default Suggesstions
