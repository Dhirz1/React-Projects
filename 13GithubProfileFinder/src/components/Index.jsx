import { useEffect, useState } from "react"
import User from "./user"

export default function GithubProfileFinder() {
    const [username , setUsername] = useState("Dhirz1")
    const [userData, setUserData] = useState(null)
    const [loading , setLoading] = useState(true)

    function handleSubmit() {
        fetchGithubUserData()
    }

    async function fetchGithubUserData() {
        try{
            setLoading(true)
            const respone = await fetch(`https://api.github.com/users/${username}`)
            const data = await respone.json()
            if(data){
                setUserData(data)
                setLoading(false)
                setUsername("")
            }
            setLoading(false)
            console.log(data)
        }catch(e){
            console.log(e)
        }
    }
    
    useEffect(()=>{
        fetchGithubUserData()
    },[])
    
    if (loading) {
        return <div>Data Loading... ! Please Wait</div>
    }

    return <div className="github-profile-container">
        <form className="input-wrapper">
            <input
                type="text"
                name="search-by-username"
                placeholder="Search Github Username...."
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
            />
            <button onClick={handleSubmit}>
                Search
            </button>
        </form>
        {userData !== null ? <User user={userData}/> : null}
    </div>
}