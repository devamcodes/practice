import React from "react";

function Person({ person }) {
  return (
    <div>
      <h1>
        My name is {person.name}, I am a {person.skill} and My age is
        {person.age}
      </h1>
    </div>
  );
}

export default Person;
