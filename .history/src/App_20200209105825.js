import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Frankensitein",
          id: "asc1"
        },
        {
          name: "Dracula",
          id: "asr2"
        },
        {
          name: "Zombie",
          id: "as1w"
        }
      ]
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json()
    );
  }

  render() {
    return (
      <div className='App'>
        {this.state.monsters.map((monsters) => (
          <h1 key={monsters.id}>{monsters.name}</h1>
        ))}
      </div>
    );
  }
}
export default App;
