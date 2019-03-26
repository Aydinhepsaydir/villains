import React, { Component } from "react";
import logo from "./logo.svg";
import VillainForm from "./VillainForm";
import VillainDisplayDetails from "./VillainDisplayDetails";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      villains: []
    };
    this.HandleInput = this.handleInput.bind(this);
  }

  //Adds user input to state array
  handleInput(villainInput) {
    this.setState({
      ...this.state.villains.push({name: villainInput.name.value, superpower: villainInput.superpower.value})
    });
    console.log("villain name input", villainInput.name.value)
    console.log("villains: ", this.state.villains)
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome...</h1>
        <p>to the largest villain database in the world.</p>
        <VillainForm
          onVillainSubmit={villainInput => this.handleInput(villainInput)}
        />
        <VillainDisplayDetails villains={this.state.villains} />
      </div>
    );
  }
}

export default App;
