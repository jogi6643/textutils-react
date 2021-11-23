import React,{useState} from "react";


export default function TexthtmlForm(props) {
    const handleUpperClick = () =>{
        var newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerClick = () =>{
        var newText = text.toLowerCase();
        setText(newText);
    }
    const handleonChnage = (event) =>{
        setText(event.target.value);
    }
    const [text,setText] = useState('');
  return (
    <>
      <div className="container mb-3">
        <label htmlFor="mybox" className="form-label">{props.heading}</label>
        <textarea className="form-control" value={text} onChange={handleonChnage} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpperClick}>Convert to Upper Case</button>
      <button className="btn btn-primary mx-3" onClick={handleLowerClick}>Convert to Lower Case</button>
      <div className="container mb-3">
       <h1>Your text Summery </h1>
       <p> {text.split(" ").length} words , {text.length} characters</p>
       <p> {0.008 * text.split(" ").length} Read Minuts</p>
       <h2>Priview</h2>
       <p>{text}</p>
    </div>
    </>
  );
}
