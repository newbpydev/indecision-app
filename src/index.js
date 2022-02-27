import React from "react";
import ReactDOM from "react-dom";
// import ReactDOM, { render } from 'react-dom';
import "./index.css";
// import App from './App'; //! I did this
// import reportWebVitals from "./reportWebVitals";

class Header extends React.Component {
  render() {
    return <p>This is from header</p>;
  }
}

const jsx = (
  <div>
    <h1>Hi</h1>
  </div>
);

ReactDOM.render(jsx, document.getElementById("root"));

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
// reportWebVitals(console.log);
