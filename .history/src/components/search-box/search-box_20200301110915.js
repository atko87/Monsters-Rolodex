import React from "react";

import "./search-box.css";

const SearchBox = () => {
  <input
    className='search'
    type='search'
    placeholder='search monsters'
    onChange={(e) => this.setState({ searchField: e.target.value })}
  />;
};
