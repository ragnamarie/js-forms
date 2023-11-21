import React from "react";
import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

// move functions to counter by putting them in counter: onAddPeople={addPeople}
export default function App() {
  const [people, setPeople] = useState(0);

  //function add people
  function addPeople() {
    setPeople(people + 1);
  }

  // function remove people
  function removePeople() {
    setPeople(people - 1);
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onAddPeople={addPeople} onRemovePeople={removePeople} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
