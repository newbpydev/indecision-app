import React from "react";
import ReactDOM from "react-dom";
// import ReactDOM, { render } from 'react-dom';
import "./index.css";
// import App from './App'; //! I did this
import reportWebVitals from "./reportWebVitals";

import Visibility from "./playground/built-it-visible";

//! I did this mod
// function App() {
//   const app = {
//     title: "The Matrix",
//     subtitle: "Follow the white rabbit!",
//     options: [],
//   };

//   const onFormSubmit = (e) => {
//     e.preventDefault();

//     const option = e.target.elements.option.value;
//     if (option) {
//       app.options.push(option);
//       e.target.elements.option.value = "";
//       console.log(app.options);
//     }
//   };

//   const onRemoveAll = (e) => {
//     app.options = [];
//     console.log(app.options);
//   };

//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       {app.subtitle && <p>{app.subtitle}</p>}
//       <p>
//         {app.options && app.options.length > 0
//           ? "Here are your options"
//           : "No options."}
//       </p>
//       <p>{app.options.length}</p>
//       <button onClick={onRemoveAll}>Remove All</button>
//       {/* <div>{numbers.map((number) => {
//         return <p key={number}>Number: {number }</p> ;
//       })}</div> */}

//       <ol>
//         {app.options.map((option) => {
//           return <li key={option}>{option}</li>;
//         })}
//       </ol>

//       <form action="" onSubmit={onFormSubmit}>
//         <input type="text" name="option" id="option" />
//         <button>Add Option</button>
//       </form>
//     </div>
//   );

//   return template;
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

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
    renderPage();
  }
};

const onRemoveAll = (e) => {
  app.options = [];
  console.log(app.options);
  renderPage();
};

const makedecision = () => {
  const randNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randNum];
  console.log(option);
};
makedecision();

//* Build It Visibility
let toggle = false;

function onToggle() {
  toggle = !toggle;
  // console.log(toggle);
  renderPage();
}

//* Rendering the page from here
function renderPage() {
  function App() {
    const template = (
      <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>
          {app.options && app.options.length > 0
            ? "Here are your options"
            : "No options."}
        </p>
        <button disabled={app.options.length === 0} onClick={makedecision}>
          What should I do?
        </button>
        <button onClick={onRemoveAll}>Remove All</button>
        {/* <div>{numbers.map((number) => {
        return <p key={number}>Number: {number }</p> ;
      })}</div> */}

        <ol>
          {app.options.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ol>

        <form action="" onSubmit={onFormSubmit}>
          <input type="text" name="option" id="option" />
          <button>Add Option</button>
        </form>
      </div>
    );

    const templateBuildIt = (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={onToggle}>
          {toggle ? "Hide details" : "Show details"}
        </button>
        {toggle && <p>Hey. These are some details you can now see!</p>}
      </div>
    );

    return templateBuildIt;
    // return template;
  }

  ReactDOM.render(<App />, document.getElementById("root"));
}

renderPage();

//! ///////////////////////////////////////////////////////////////////////////
//! this is the original render
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
