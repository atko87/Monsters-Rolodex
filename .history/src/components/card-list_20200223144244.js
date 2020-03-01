import React from "react";

import { Card } from "../components/card/card";
import "./card-list/card-list.styles.css";

export const CardList = (props) => {
  console.log(props);
  return (
    <div className='card-list'>
      {props.monsters.map((monsters) => (
        <Card key={monsters.id} />
      ))}
    </div>
  );
};
