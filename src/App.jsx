import React, { useState, useEffect } from "react";
import Persona from "./components/Persona/Persona";
import "./styles.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const peticion = fetch("https://jsonplaceholder.typicode.com/users");

    if (show) {
      peticion
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log("data: ", data);
          setUsers(data);
        })
        .catch((err) => console.error(err));
    }
  }, [show]);

  return (
    <div className="App">
      <h1>Personas:</h1>
      <button onClick={() => setShow(!show)}> Mostrar </button>
      {show && (
        <div className="personas">
          {users.length > 0 ? (
            users.map((user) => {
              return (
                <Persona
                  key={user.id}
                  nombre={user.name}
                  email={user.email}
                  address={user.address.city}
                  company={user.company}
                />
              );
            })
          ) : (
            <div>loading...</div>
          )}
        </div>
      )}
    </div>
  );
}
