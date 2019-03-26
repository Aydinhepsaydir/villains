import React, { Component } from "react";

export default function VillainDisplayDetails({villains}) {
  return (
    <div>
      {villains.villains.map(villain => (
        <div className="villainCard">
          <p>Villain Name: {villain.name}</p>
          <p>Superpower: {villain.superpower}</p>
        </div>
      ))}
    </div>
  );
}
