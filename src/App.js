import React, {useState, useEffect} from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:4000/users")
      .then(r => r.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []);
  console.log(users)
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <Outlet context={users}/>
    </>
  );
};

export default App;
