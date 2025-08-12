import React, { useState } from "react";
import Searchbar from "../components/Searchbar";
// import * as confetti from "confettis";
function Accueil() {
  //   confetti.create();
  let [users, setUsers] = useState([
    { id: 1, prenom: "nidhal" },
    { id: 2, prenom: "aziz" },
    { id: 3, prenom: "sahar" },
  ]);
  let obj = {
    prenom: "nidhal",
    nom: "jelassi",
    age: 42,
  };

  console.log("exemple", { ...obj });

  return (
    <>
      <Searchbar>Bla bla bla</Searchbar>
      <ol className="list-group">
        {users.map((element, index) => {
          return (
            <li key={index} className="list-group-item">
              {index}
              {element.prenom}
              <input type="text" className="form-control" />
            </li>
          );
        })}
      </ol>
      <button
        onClick={() => {
          setUsers((previous) => {
            previous.splice(0, 1);
            return [...previous];
          });
        }}
      >
        Delete Nidhal
      </button>
    </>
  );
}

export default Accueil;
