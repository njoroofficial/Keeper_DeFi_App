import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
// getting the dkeeperApp canister
import { dkeeperApp } from "../../../declarations/dkeeperApp";

function App() {
  const [notes, setNotes] = useState([]);

  function addNotes(text) {
    setNotes((prevNotes) => {
      // Call the dkeeperApp canister to create a note
      dkeeperApp.createNote(text.title, text.content);
      return [...prevNotes, text];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNotes} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          delete={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
