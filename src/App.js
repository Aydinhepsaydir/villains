import React, { Component } from "react";
import logo from "./logo.svg";
import VillainForm from "./VillainForm";
import VillainDisplayDetails from "./VillainDisplayDetails";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      villains: [
        {
          villain: {
            name: "hello",
            superpower: "yes"
          }
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <VillainForm onVillainName={villain => console.log(villain)} />
        <VillainDisplayDetails villains={this.state} />
      </div>
    );
  }
}

export default App;
