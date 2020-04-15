import React from "react";
import "./card-list-style.css";
import { CardContent } from "../card-content/card-content";

export const CardList = (props) => {
  // create a object

  return (
    <div className="card-list">
      {props.allMonsters.map((el) => (
        <CardContent key={el.id} monstersEl={el} />
      ))}
    </div>
  );
};

// export default CardList; // It's not working.
