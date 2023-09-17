import React, { useState } from "react";

export default function Textform(props) {

  // TEXT MANIPULATION STATE CHANGES

  const [Text, setText] = useState("Enter Text here");

  const upperText = () => {
    let newText = Text.toUpperCase();
    setText(newText);
  };
  const lowerText = () => {
    let newText = Text.toLowerCase();
    setText(newText);
  };
  const reverseText = () => {
    let splitString = Text.split("");
    let reverseArray = splitString.reverse();
    let newText = reverseArray.join("");
    setText(newText);
  };
  const alternateText = () => {
    let chars = Text.toLowerCase().split("");
    for (var i = 0; i < chars.length; i += 2) {
      chars[i] = chars[i].toUpperCase();
    }
    let newText = chars.join("");

    setText(newText);
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
  };

  const change = (event) => {
    console.log("theres a change");
    setText(event.target.value);
  };

  return (
    <div>
      <h1> {props.heading} </h1>
      <div className="container my-5 mb-3">
        <textarea
          className="form-control my-3"
          id="textinput"
          rows="10"
          value={Text}
          onChange={change}
        ></textarea>
      </div>
      <button className="btn btn-outline-primary" onClick={upperText}>
        Convert to Uppercase
      </button>
      <button className="btn btn-outline-primary mx-2" onClick={lowerText}>
        Convert to Lowercase
      </button>
      <button className="btn btn-outline-primary mx-2" onClick={reverseText}>
        Reverse
      </button>
      <button className="btn btn-outline-primary mx-2" onClick={alternateText}>
        Alternate
      </button>
      <button className="btn btn-outline-primary mx-2" onClick={clearText}>
        Clear
      </button>
    </div>
  );
}
