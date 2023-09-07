import React, { useState } from 'react';

export default function Textform(props) {
  const convertText = ()=>{
    setText("hgigiug")
  }
  const change = ()=>{
    console.log("theres a change")
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
      <button className="btn btn-outline-success" onClick={convertText}>Convert</button>
    </div>
  );
}
