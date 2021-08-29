import React from 'react';
import ReactDOM from 'react-dom';

// Exercises from reactjs.org/docs. Commented out as completed.

// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root') 
// )

const element = <h1>Hello, world!</h1>

ReactDOM.render(
  element, document.getElementById('root')
)