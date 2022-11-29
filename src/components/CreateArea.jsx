import React, {useState} from "react";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [expanded, setExpanded] = useState(false);

  const [noteText, setNoteText] = useState({
      title: "",
      content: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;

    setNoteText((prevValues) => {
      return {
          ...prevValues,
          [name]: value
      }
    });
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {expanded && <input 
          onChange={handleChange} 
          name="title" 
          placeholder="Title" 
          value={noteText.title} 
        />}
        <textarea 
          onChange={handleChange} 
          onClick={expand}
          name="content" 
          placeholder="Take a note..." 
          rows={expanded ? "3" : "1"}
          value={noteText.content} 
        />
        <Zoom in={expanded}>
          <Fab 
            onClick={(event) => {
              props.onAdd(noteText);
              setNoteText({   
                title: "",
                content: ""
              });
              event.preventDefault();
            }}
          >
            <NoteAddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
