import React, { Component } from "react";

export default function VillainDisplayDetails(props) {
  console.log(props.villains);
  return (
    <div>
      {props.villains.map(villain => (
        <div className="villainCard" key={villain.name + villain.superpower}>
          <p>Evil Person: </p>
          <li>{villain.name}</li>
          <li>{villain.superpower}</li>
        </div>
      ))}
    </div>
  );
}
