import React, { useState } from "react";

function CreateArea(props) {
  const [text, setText] = useState({
    title: "",
    content: "",
  });

  function handleInput(event) {
    const { name, value } = event.target;

    setText((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
    event.preventDefault();
  }

  function handleClick(event) {
    props.addNote(text);
    setText({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleInput}
          name="title"
          placeholder="Title"
          value={text.title}
        />
        <textarea
          onChange={handleInput}
          value={text.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
