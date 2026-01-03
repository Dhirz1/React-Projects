import { useEffect, useState } from "react"
import Suggesstions from "./suggesstions"


export default function SearchAutoComplete() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState("");
    const [showDropDown, setShowDropDown] = useState(false);
    const [filterUsers, setFilterUsers] = useState([]);

    function handleChange(event) {
        const query = event.target.value.toLowerCase();
        setSearchParam(query);
        if (query.length > 1) {
            const filteredData = users && users.length ?
                users.filter((item) => item.toLowerCase().indexOf(query) > - 1)
                : [];
            setFilterUsers(filteredData);
            setShowDropDown(true);
        }
        else {
            setShowDropDown(false);
        }
    }
    
    function handleClick(event) {
        setShowDropDown(false);
        setSearchParam(event.target.innerText);
        setFilterUsers([]);

    }


    async function fetchListOfUsers() {
        try {
            setLoading(true)
            const respone = await fetch("https://dummyjson.com/users");
            const data = await respone.json();
            data && data.users && data.users.length ?
                setUsers(data.users.map((userItem) => userItem.firstName))
                : null;
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
            setError(error);
        }
    }

    useEffect(() => {
        fetchListOfUsers();
    }, [])
    console.log(users, filterUsers);

    if (loading) {
        return <div>Data Loading ! Please Wait</div>
    }

    return <div className="">
        {
            loading ? <h1>Loading Data ! Please Wait</h1>
                :
                <input
                    type="text"
                    placeholder="Search User..."
                    value={searchParam}
                    onChange={handleChange}
                />
        }

        {
            showDropDown && <Suggesstions handleClick={handleClick} data={filterUsers} />
        }
    </div>
}