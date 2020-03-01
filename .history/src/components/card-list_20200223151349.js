import React from "react";

import { Card } from "../components/card/card.js";

import "./card-list/card-list.styles.css";

export const CardList = (props) => (
  <div className='card-list'>
    {props.monsters.map((monsters) => (
      <Card key={monsters.id} monsters={monsters} />
    ))}
  </div>
);
