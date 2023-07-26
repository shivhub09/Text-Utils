import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('Enter Text here');

  return (
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
      <br />
      <button type="button" className="btn btn-dark" onClick={handleUpClick}>
        Convert To UpperCase
      </button>
    </div>
  );
}
