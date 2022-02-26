// import { template } from "@babel/core";
import React from "react";

let toggle = false;

function onToggle() {
  toggle = !toggle;
  console.log(toggle);
}
export default function Visibility() {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onToggle}>{toggle ? "Hide" : "Show"} details</button>
      {toggle && <p>Hey. These are some details you can now see!</p>}
    </div>
  );

  return template;
}

// Visibility();
