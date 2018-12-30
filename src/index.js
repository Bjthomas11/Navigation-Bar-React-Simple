// import react in
import React from "react";
// import react dom (virtual dom)
import ReactDOM from "react-dom";
// import navigation component
import NavigationBar from "./components/navigation-bar";
// import main css file
import "./index.css";

// created array of objects holding the data links text and href links
const links = [
  {
    text: "Courses",
    href: "http://www.thinkful.com/courses/"
  },
  {
    text: "Mentorship",
    href: "http://www.thinkful.com/mentorship/"
  }
];

// render with react dom and use the main component (jsx) with a title and links as passed from the links array of objects from above, put it inside the root id on html page
ReactDOM.render(
  <NavigationBar title="Thinkful" links={links} />,
  document.getElementById("root")
);
