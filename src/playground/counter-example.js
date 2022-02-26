//* Event and Attributes: counter Example
let count = 0;
const minusOne = () => {
  console.log("minusOne");
};
const reset = () => {
  console.log("reset");
};
const addOne = () => {
  console.log("addOne");
};
const templateEvent = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={minusOne}>- 1</button>
    <button onClick={reset}>reset</button>
    <button onClick={addOne}>+ 1</button>
  </div>
);

return templateEvent;
