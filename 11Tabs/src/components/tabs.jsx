import { useState } from "react"


export default function Tabs({ tabsContent, onChange }) {
    const [currentTabIndex, setCurrentTabIndex] = useState(0)

    function handleOnClick(getCurrentIndex){
        setCurrentTabIndex(getCurrentIndex)
        onChange(getCurrentIndex)
        console.log(getCurrentIndex)
    }

    return <div className="wrapper">
        <div className="heading">
            {
                tabsContent.map((tabItem,index) => (
                <div onClick={()=> handleOnClick(index)} key={tabItem.label}>
                    <div className="label m-2 border text-center py-2 px-4">{tabItem.label}</div>
                </div>
                ))}
        </div>
        <div className="content mt-6">
            {
                tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
            }
        </div>

    </div>
}