import React from "react";

import "./card-list/card-list.styles";

export const CardList = (props) => {
  console.log(props);
  return <div className='card-list'>{props.children}</div>;
};
