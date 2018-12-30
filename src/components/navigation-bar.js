// import react in
import React from "react";
// import component css files
import "./navigation-bar.css";

// create export that holds props (properties)
export default function NavigationBar(props) {
  // create variable with the props of links and map through it to get the link and index of each link
  const links = props.links.map((link, index) => (
    //   create li tag with a key index number, inside the li add a href tag with each link.href, inside the a href tag put the link text from index.js page
    <li key={index}>
      <a href={link.href} target="_blank">
        {link.text}
      </a>
    </li>
  ));

  //   return a div that holds the properties title in an h1 then a nav element that holds the links variable in an ul
  return (
    <div className="navigation-bar">
      <h1>{props.title}</h1>
      <nav className="navigation-bar-nav">
        <ul>{links}</ul>
      </nav>
    </div>
  );
}
