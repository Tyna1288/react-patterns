import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import NavBar from "./NavBar";

import whiskey from "./Images/Whiskey.jpg";
import tubby from "./Images/Tubby.jpg";
import duke from "./Images/Duke.jpg";
import perry from "./Images/Perry.jpg";


function App({dogs}) {
  return (
    <div>
      <BrowserRouter>
        <NavBar dogs={dogs} />
        <div className="container">
          <Routes dogs={dogs} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export const dogs = [
  {
    name: "Whiskey",
    age: 3,
    src: whiskey,
    facts: [
      "Whiskey always chews on Katy's toys.",
      "Whiskey loves to cuddle all the time.",
      "Whiskey make mess in the house alot!"
    ]
  },
  {
    name: "Duke",
    age: 5,
    src: duke,
    facts: [
      "Duke is always playing and jumping on people.",
      "Duke likes playing in the rain and muddy poddles.",
      "Duke is very hyper and loves engaging in obstacle courses with janice." 
    ]
  },
  {
    name: "Perry",
    age: 2,
    src: perry,
    facts: [
      "Perry is very lazy.",
      "Perry hates taking baths.",
      "Perry loves eating food and taking naps."
    ]
  },
  {
    name: "Tubby",
    age: 4,
    src: tubby,
    facts: [
      "Tubby plays with kids and adults alike.",
      "Tubby enjoys a nice spa day.",
      "Tubby is very loyal and listens to Andy."
    ]
  }
];

App.defaultProps = { dogs };

export default App;
