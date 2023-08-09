import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log('uppercase was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text Here');
    // text = 'new text'; // wrong way to change the state
    // setText("write here"); // right way to change the state
    return (
        <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange}></textarea>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
        </div>
    </div>
  )
}
