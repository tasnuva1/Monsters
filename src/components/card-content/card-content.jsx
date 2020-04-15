import React from "react";
import "./card.css";

export const CardContent = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monstersEl.id}?set=set2&size=180x180`}
        alt="Monsters"
      />
      <h2>{props.monstersEl.name}</h2>
      <p>{props.monstersEl.email}</p>
    </div>
  );
};
