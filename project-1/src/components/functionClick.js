import React from "react";

function functionClick() {
  function clickHandler() {
    console.log("button clicked.");
  }
  return (
    <div>
      <button onClick={clickHandler}>click me</button>
    </div>
  );
}

export default functionClick;
