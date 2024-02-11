import { Key, useState } from "react";
import { NewNoteCard } from "./NewNoteCard";
import { NoteCards } from "./NoteCards";

interface Note {
  id: String;
  date: Date;
  text: String;
}

export const NotesContainer = () => {
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem("notes");

    if (notesOnStorage) {
      return JSON.parse(notesOnStorage);
    }
    return [];
  });

  function onNewNoteSaved(text: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      text,
    };

    const notesArr = [newNote, ...notes];

    setNotes(notesArr);

    localStorage.setItem("notes", JSON.stringify(notesArr));
  }

  return (
    <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
      <NewNoteCard onNewNoteSaved={onNewNoteSaved} />

      {notes.map((note) => (
        <NoteCards key={note.id as Key} note={note} />
      ))}
    </div>
  );
};
