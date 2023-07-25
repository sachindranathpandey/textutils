import React, { useState } from 'react';

function MyComponent() {
  const [text, setText] = useState('');

  const handleTextareaChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea value={text} onChange={handleTextareaChange} />
      <h1>Your Text Summery</h1>
      
    </div>
  );
}

export default MyComponent;
