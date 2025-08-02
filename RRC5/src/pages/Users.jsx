/** 
//hw: no clue

import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Users() {
    const { id } = useParams()

    //"https://jsonplaceholder.typicode.com/users"


    return (
        <div>{ id }</div>
    )
}

export default Users;
//*/
//hw: no clue

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";



function Users() {
    const { id } = useParams()
    const [array, setArray] = useState({});

    async function fetchId() {
        
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        setArray(data)
    }

    useEffect(() => {
        fetchId();
    }, [])




    return (
        <div>
            <Link to='/'>Back to Home</Link>
            <h1>{array.id}</h1>
            <h1>{array.name}</h1>
            <h1>{array.username}</h1>
        </div>
    )
}

export default Users;