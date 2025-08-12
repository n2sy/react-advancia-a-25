import React from "react";
import "./BookList.css";
function BookList() {
  let tab = ["Livre 1", "Livre 2", "Livre 3", "Livre 4"];

  return (
    <ol>
      {tab.map((element) => {
        return (
          <li>
            <h1>{element}</h1>
          </li>
        );
      })}
    </ol>
  );
}

export default BookList;
