import React from "react";
import ReactDOM from "react-dom";

// function Greeting(){
//   return <h4>Hi this is my first component</h4>;
// }

// const Greeting = ()=> {
//   return React.createElement('h1',{},'hello world');
// }

// JSX Rules 
// always return single element -> div/section/article/Fragment
// use camelCase for html attributes
// className instead of class
// close every element
// formatting (use parenthesis)

function Greeting(){
  return (
    <div>
      <h1>yo wassup</h1>
      <ul>
        <li>Hey yo</li>
      </ul>
      <img src="" alt=""/>
      <input type="text" placeholder="enter"/>
    </div>
    );
}

// const Greeting = ()=>{
//   return React.createElement('div',{},
//   React.createElement('h1',{},'hello everybody'));
// }

//Nested components

function Introduction(){
  return (
    <div>
      <Person/>
      <Message/>
    </div>
  )
}
const Person = () => <h1>Albab Ahmed</h1>;
const Message = ()=> {
  return <h3>this is a nested component</h3>;
}
// React Tools -> see in components section in browser all the components

ReactDOM.render(
  <Introduction/>,
  document.getElementById('root')
);

