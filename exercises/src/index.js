import React from 'react';
import ReactDOM from 'react-dom';

// Exercises from reactjs.org/docs. Commented out as completed.


// Hello World

// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root') 
// )



// Introducing JSX


// Embedding Expressions in JSX

// const element = <h1>Hello, world!</h1>

// ReactDOM.render(
//   element, document.getElementById('root')
// )

// const name = 'Josh Perez';
// const element = <h1>Hello, {name}</h1>

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'  
// }

// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );


// JSX is an Expression Too

// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}!</h1>
//   }
//   return <h1>Hello, Stranger.</h1>
// }

// const element = (
//   getGreeting(user)
// )


// Specifying Children with JSX

// const element = (
//   <div>
//     <h1>Hello!</h1>
//     <h2>Good to see you here.</h2>
//   </div>
// );


// JSX Represents Objects

// const element = (
//   <h1 className="greeting">
//     Hello, world
//   </h1>
// );

// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world'
// );

ReactDOM.render(
  element,
  document.getElementById('root')
);