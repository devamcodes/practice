import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "jake",
      age: 20,
      skill: "Front-End Developer",
    },
    {
      id: 2,
      name: "lana",
      age: 30,
      skill: "Mobile App Developer",
    },
    {
      id: 3,
      name: "alan",
      age: 25,
      skill: "Back-End Developer",
    },
  ];
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return <div>{personList}</div>;
}

export default NameList;
