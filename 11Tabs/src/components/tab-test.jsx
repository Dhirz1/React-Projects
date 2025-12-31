import Tabs from "./tabs";

function RandomComponents(){
    return <h1>Some Random Components For Tab 3</h1>
}

export default function TabTest(){

    const tabs = [
        {
            label: "Tab 1",
            content: <div className="text-2xl">This is content for Tab 1</div>
        },
        {
            label: "Tab 2",
            content: <div className="text-3xl">This is content for Tab 2</div>
        },
        {
            label: "Tab 3",
            content: <RandomComponents />
        }
    ]

    function handleChange(currentTabIndex){
        console.log(currentTabIndex)
    }

    return <Tabs tabsContent={tabs} onChange={handleChange}/>
}