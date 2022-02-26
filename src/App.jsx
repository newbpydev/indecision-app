import React from "react";
import "./App.css";

function App() {
  const app = {
    title: "The Matrix",
    subtitle: "Follow the white rabbit!",
    options: [],
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
      app.options.push(option);
      e.target.elements.option.value = "";
      console.log(app.options);
    }
  };

  const onRemoveAll = (e) => {
    app.options = [];
    console.log(app.options);
  };

  // const numbers = [1, 55, 1000];

  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>
        {app.options && app.options.length > 0
          ? "Here are your options"
          : "No options."}
      </p>
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>Remove All</button>
      {/* <div>{numbers.map((number) => {
        return <p key={number}>Number: {number }</p> ;
      })}</div> */}

      <ol>
        {app.options.map((option) => {
          return <li key={option}>{ option }</li>
        })}
      </ol>

      <form action="" onSubmit={onFormSubmit}>
        <input type="text" name="option" id="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  const templateBuildIt

  const user = {
    name: "Juan",
    age: 39,
    location: "Santo Domingo",
  };

  function getLocation(location) {
    if (location) {
      return <p>Location: {location}</p>;
    }
  }

  const templateTwo = (
    <div>
      <h1>{user.name ? user.name : "Anonymous"}</h1>
      {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
      {/* <p>Location: {getLocation(user.location)}</p> */}
      {getLocation(user.location)}
    </div>
  );



  return template;
}

export default App;
