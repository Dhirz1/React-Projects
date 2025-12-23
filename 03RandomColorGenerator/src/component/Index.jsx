import React, { useState } from 'react'

function Index() {
    const [typeOfColor, setTypeColor] = useState("hex")
    const [color, setColor] = useState('#000000')

    function handleCreateRandomHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 8, 9, "A", "B", "C", "D", "E", "F"]
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[Math.floor(Math.random() * hex.length)]
        }
        console.log(hexColor)
        setColor(hexColor)
    }


    return (
        <>
            <div className="container flex justify-center items-center flex-col gap-5" style={{
                width: "100vw",
                height: "100vh",
                background: color
            }}>
                <div>
                {/* <button className='m-3' onClick={() => setTypeColor("hex")}>Create HEX Color</button>
                <button className='m-3' onClick={() => setTypeColor("rgb")}>Create RGB Color</button> */}
                <button className='m-3' onClick={handleCreateRandomHexColor}>Generate Random Color</button>
                </div>
                <h3 className='text-3xl'>Hex Color</h3>
                <h1>{color}</h1>
            </div>
        </>

    )
}

export default Index
