import React, { Component } from "react";

export default function VillainForm({onVillainSubmit}) {
  let villainInput = 
  {
    name: "",
    superpower: ""
  };

  return (
    <form
      className="villainForm"
      onSubmit={evt => {
        evt.preventDefault();
        onVillainSubmit(villainInput);
      }}
    >
      <div className="inputField">
        <label>Villain Name: </label>
        <input ref={nameInput => (villainInput.name = nameInput)} />
        {console.log("villain name: ", villainInput.name.value)}
      </div>
      <div className="inputField">
        <label>Superpower: </label>
        <input ref={superInput => (villainInput.superpower = superInput)} />
        <p>{villainInput.superpower}</p>
      </div>
      <button>Submit</button>
    </form>
  );
}
