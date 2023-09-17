// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Textform from "./Components/Textform";
import { useState } from "react";

function App() {
    // DARK MODE STATE CHANGE (BUT ONLY MAKE CHNAGES IN APP.JS)


    const [btnText, setBtnText] = useState("ENABLE DARK MODE");
    const [mystyle, setMystyle] = useState({
      color: "black",
      backgroundColor: "white",
      border: "1px solid black",
    });
    const [btnStyle, setBtnStyle] = useState("btn btn-dark my-3");
  
    const darkmode = () =>{
      if(mystyle.color === "black"){
        setMystyle({
          color : "white",
          backgroundColor : "black",
          border: "1px solid black",
        });
        let txt = "ENABLE LIGHT MODE"
        setBtnText(txt)
        let btnClass = "btn btn-outline-light my-3"
        setBtnStyle(btnClass)
      }
      else{
        setMystyle({
          color : "black",
          backgroundColor : "white",
          border: "1px solid white",
        });
        let txt = "ENABLE DARK MODE"
        setBtnText(txt)
        let btnClass = "btn btn-dark my-3"
        setBtnStyle(btnClass)
    }
  }

  // DARK MODE (CAN CHANGE ALL THE COMPONENTS )
  
  return (
    <body>
      <Navbar />
      <div className="container my-3">
        <About />
        <Textform heading="Enter Text" />
        <button className={btnStyle} onClick={darkmode}>
        {btnText}
      </button> 
      </div>
    </body>
  );
}

export default App;
