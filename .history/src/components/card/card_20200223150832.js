import React from "react";
import "./card.css";

export const Card = (props) => (
  <div className='card-container'>
    <img
      alt='monster'
      src={`https://robohash.org/${props.monster.id}?set=set2&size180x180`}
    />
    <h1> {props.monsters.name}</h1>
  </div>
);
