import React, { useState } from "react";

export default function Notes() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([
    "Study React Hooks",
    "Complete Attendance Report",
    "Prepare for Statistics Quiz",
  ]);

  const addNote = () => {
    if (!note.trim()) return;

    setNotes([...notes, note]);
    setNote("");
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div className="notes-page">
      <h1>📝 My Notes</h1>

      <div className="note-form">
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write a quick note..."
        />

        <button onClick={addNote}>
          Add Note
        </button>
      </div>

      <div className="notes-list">
        {notes.length === 0 ? (
          <p>No notes available.</p>
        ) : (
          notes.map((item, index) => (
            <div className="note-card" key={index}>
              <p>{item}</p>

              <button
                className="delete-btn"
                onClick={() => deleteNote(index)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

