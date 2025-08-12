import React from "react";
import "./BookItem.css";
import Card from "./Card";
function BookItem(props) {
  return (
    <div className="item col-md-4">
      <Card>
        <div className="image">
          <img src={props.unLivre.image}></img>
        </div>
        <div className="content">
          <h3>{props.unLivre.title}</h3>
          <address> {props.unLivre.year} </address>
        </div>
        <div className="actions">
          <button>Add to Favourites</button>
        </div>
      </Card>
    </div>
  );
}

export default BookItem;
