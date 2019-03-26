import React, { Component } from "react";

class VillainForm extends React.Component {
  constructor() {
    super();
    this.state = {
      villain: {
        name: "The Riddler",
        superpower: "Riddles"
      }
    };
  }

  render() {
    return (
      <form
        onSubmit={evt => {
          evt.preventDefault();
          this.props.onVillainName(this.state.villain);
        }}
      >
        <div className="villainForm">
          <label>Villain Name: </label>
          <input
            onChange={evt =>
              this.setState({
                villain: {
                  name: evt.target.value,
                  superpower: { ...this.state.villain.superpower }
                }
              })
            }
          />
          <p>{JSON.stringify(this.state.villain.name)}</p>
        </div>
        <div className="villainForm">
          <label>Superpower: </label>
          <input
            onChange={evt =>
              this.setState({
                villain: {
                  name: { ...this.state.villain.name },
                  superpower: {...evt.target.value}
                }
              })
            }
          />
          <p>{this.state.villain.superpower}</p>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default VillainForm;
