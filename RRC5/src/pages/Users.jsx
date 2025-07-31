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