import React, { Component } from "react";

import { CardList } from "./components/card-list";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((user) => this.setState({ monsters: user }))
    );
  }

  render() {
    return (
      <div className='App'>
        <input
          type='search'
          placeholder='search monsters'
          onChange={(e) =>
            this.setState({ searchField: e.target.value }, () =>
              console.log(this.state)
            );
          }
        />
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}
export default App;
