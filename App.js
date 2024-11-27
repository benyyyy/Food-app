import React from "react";
import ReactDOM from "react-dom/client";
// header
// logo
// navitems
// body
// search
// restaurantcontainer
// restaurantcard
// footer
// copyright
// links
// address
// contact
const Header=()=>{
   return(
      <div className="header">
      <div className="logo-container">
         <img  className="logo"  
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRESsGm92deQDTJR9fiWcHZ8S94NCmFLSkkQg&s"
         />
      </div>
      <div className="nav-items">
         <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>cart</li>
         </ul>
      </div>

      </div>
   )
}
const AppLayout=()=>{
   return(
     <div className="app">
<Header/>

     </div>
   )
}
// Create root
const root = ReactDOM.createRoot(document.getElementById("first"));
root.render(<AppLayout />);
