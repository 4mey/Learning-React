import React, { useState } from 'react';

export default function Textform(props) {
  const upperText = ()=>{
    let newText = Text.toUpperCase()
    setText(newText)
  }
  const lowerText = ()=>{
    let newText = Text.toLowerCase()
    setText(newText)
  }
  const reverseText = ()=>{
    let newText = Text.slice()
    setText(newText)
  }
  const change = (event)=>{
    console.log("theres a change")
    setText(event.target.value)
  }
  const [Text, setText] = useState("Enter Text here");
  return (
    <div>
    <h1> {props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control my-3"
          id="textinput"
          rows="10"
          value={Text}
          onChange={change}
        ></textarea>
      </div>
      <button className="btn btn-outline-success" onClick={upperText}>Convert to Uppercase</button>
      <button className="btn btn-outline-success mx-2" onClick={lowerText}>Convert to Lowercase</button>
      <button className="btn btn-outline-success mx-2" onClick={reverseText}>Convert to Lowercase</button>
    </div>
  );
}
