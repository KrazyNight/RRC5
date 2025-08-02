
///** 
import { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/User.jsx";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  async function fetchData() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    setUsers(data);
  }

  useEffect(() => {
    //call the API/ href...
    fetchData();
  }, []);

  return (
    <>
      <div>
        {users.map((user) => (
            <Link key={user.id} to={`/users/${user.id}`}>
            <User
            id={user.id}
            name={user.name}
            username={user.username}
          />

            </Link>
        
        ))}
      </div>
    </>
  );
}

export default Home;
//*/
/**
//Step one 
//Hw: find a way to display data in frontend/page.
import { useEffect } from "react";
import axios from "axios";
 
function Home() {

    async function fetchData() {
        const data = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(data)
    }


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <h1>Home</h1>
    //place data above or {data}
    </>
  ) 
}

export default Home;

 */
/** 
//Step one: solo iy too 

//Hw: find a way to display data in frontend/page.
import axios from "axios";
import { useEffect, useState } from "react";
import User from "../components/User.jsx";
import { Link } from "react-router-dom";


 
function Home() {
  const [users, setUsers] = useState([]);

  async function fetchData() {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, [])






  // "https://jsonplaceholder.typicode.com/users"
        


  return (
    <>
    <div>
      {users.map((user) => (
      <Link key={user.id} to={`/users/${user.id}`}>
      <User 
      id={user.id}
      name={user.name}
      username={user.username}
      />
      </Link>
))};
    </div>
    </>
  ) 
}

export default Home;
*/