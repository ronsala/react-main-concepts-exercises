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

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );



// Rendering Elements


// Rendering an Element into the DOM

// const element = <h1>Hello, world</h1>

// ReactDOM.render(element, document.getElementById('root'));


// Updating the Rendered Element

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'))
// }

// setInterval(tick, 1000);


// Components and Props

// function Welcome(props) {
//   return <h1>Welcome, {props.name}</h1>
// }

// const element = <Welcome name="Sara" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// Composing Components

// function Welcome(props) {
//   return <h1>Welcome, {props.name}</h1>
// }

// function App() {
//   return(
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// Extracting Components

function formatDate(date) {
  return date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear()
}

function Comment(props) {
  return(
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
      </div>
      <div className="UserInfo-name">
        {props.author.name}
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const authorObj = {'avatarUrl': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Michael-Spavor-2010_%28cropped%29.jpg/126px-Michael-Spavor-2010_%28cropped%29.jpg', 'name': 'Ron'};

ReactDOM.render(
  <Comment author={authorObj} date={new Date()} text="This is a curious exercise." />,
  document.getElementById('root')
);