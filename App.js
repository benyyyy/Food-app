   
   const parent = React.createElement("div",{id:"parent"},React.createElement
    ("div",{id:"child"},[React.createElement("h1",{},"i am h1 tag"),React.createElement("h2",{},"i am h2 tag")]))
   
   // Create a React element
   const heading = React.createElement("h1", {
    id:"heading",xyz: "abc"
   }, "Hello World");

   // Create the root and render the element
   const root = ReactDOM.createRoot
   (document.getElementById("first"));
   root.render(headings);
  


  