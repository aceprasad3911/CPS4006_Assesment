import React, { Component } from 'react';

// Class components are JavaScript classes that extend the base React.Component 
// class. They provide a rich set of features, including state management, 
// lifecycle methods, and access to the this keyword. Although they have a more 
// verbose syntax compared to functional components, they offer greater flexibility. 
// If a class component has a constructor() function, it gets called during initialisation. 
// The constructor is where we set up the component’s properties (often stored in the state object). 
// Every class component requires a render() method, which returns the HTML 
// representation of the component.

// Class-Based Component:
class SimpleComponent extends Component {
  render() {
    return (
        <h1>Hello, I am a class component!</h1>
    )
  }
}

// Function-based components in React are lightweight and concise alternatives to 
// class components, introduced in React 16.8. They are simply JavaScript functions 
// that accept props as arguments and return JSX. Unlike class components, 
// they do not have a this keyword, lifecycle methods, or state management. 
// Function components are favoured for their simplicity, readability, and 
// performance, especially for presentational or stateless components.

// Function-Based Component
function SimpleComponent() {
    return (
        <h1>Hello, I am a function component!</h1>
    );
  };
  
  export default SimpleComponent;

// Arrow notation, introduced in ES6, provides a concise syntax for writing functions 
// in JavaScript. It's particularly useful for defining anonymous functions and 
// simplifying the syntax of function expressions. With arrow functions, you can omit 
// the function keyword and use a shorter syntax, which consists of a set of parentheses
// (optional for single parameter), an arrow (=>), and the function body. 
// This notation also automatically binds the this context to the surrounding code, 
// which is especially helpful in React components when dealing with event handlers 
// and callback functions.

// Arrow Notation: 
const SimpleComponent = () => {
  return <h1>Hello, I am a function component!</h1>
};

export default SimpleComponent;

// To display a component, we need to import the component into the file where we
// wish to use it, e.g., App.jsx. Then, we simply include the component's name as a 
// JSX element in the return statement of the parent component's render method or function. 
// For example, if we have a component named MyComponent, we would include <MyComponent /> in 
// the JSX of the parent component, in this case, the App component:

// Displaying the Component:
import React from 'react';
import MyComponent from './components/MyComponent';

const App = () => {
  return (
    <div>
      <h1>Hello!</h1>
      <p>The is some sample text.</p>
      <MyComponent />
    </div>
  );
}

export default App;