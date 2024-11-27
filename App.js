import React from "react";
import ReactDOM from "react-dom/client";

// Title Component
const Title = () => (
  <h1>This is another component</h1>
);

// JSX Element
const jsxHeading = <h1 id="heading">Hello, how are you?</h1>;
console.log(jsxHeading);

// Functional Component
const FunctionalComponent = () => {
  // Ensure you use `return` to provide the JSX
 return  (
    <div>
      <h1>I am a functional component of React</h1>
      <Title /> {/* Use the Title component */}
      //we can also call like this 
      {Title()} 
    </div>
  );
};

// Create root
const root = ReactDOM.createRoot(document.getElementById("first"));
root.render(<FunctionalComponent />);
