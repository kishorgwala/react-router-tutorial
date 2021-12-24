import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <div>
      <Name />
      <Messsage />
    </div>
  );
}

const Name = () => { 
  const grtName = 'Jo jo';
  return (
    <h1>{ grtName }</h1>
  );
};
const Messsage = () => <h3> Hello React </h3>;

ReactDom.render(<Greeting></Greeting>, document.getElementById("root"));
