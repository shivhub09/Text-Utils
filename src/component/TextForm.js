import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleclear = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  return (
    <>
        <div>
          <div className="input-group">
            <span className="input-group-text">{props.title} </span>
            <textarea
              className="form-control"
              value={text}
              aria-label="With textarea"
              rows="8"
              onChange={handleOnChange}
            ></textarea>
          </div>

          <br/>
          
          <button type="button" className="btn btn-dark" onClick={handleUpClick}>
            Convert To UpperCase
          </button>

          <button type="button" className="btn btn-dark mx-3" onClick={handleloClick}>
            Convert To LowerCase
          </button>
          
          <button type="button" className="btn btn-dark mx-3" onClick={handleclear}>
            Clear Text
          </button>
        </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
    
  );
}
