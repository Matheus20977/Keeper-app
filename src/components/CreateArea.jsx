import React, {useState} from "react";

function CreateArea(props) {
  const [noteText, setNoteText] = useState({
      title: "",
      content: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;

    setNoteText((prevValues) => {
      return (
        {
          ...prevValues,
          [name]: value
        }
      );
    });
  }

  return (
    <div>
      <form onSubmit={(event) => {
        event.preventDefault();
      }}>
        <input onChange={handleChange} name="title" placeholder="Title" value={noteText.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={noteText.content} />
        <button onClick={() => {
          props.onAdd(noteText);
          setNoteText(() => {
            return ({
              title: "",
              content: ""
            });
          });
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
