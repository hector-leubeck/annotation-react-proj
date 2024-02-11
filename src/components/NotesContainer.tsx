import { Key, useState } from "react";
import { NewNoteCard } from "./NewNoteCard";
import { NoteCards } from "./NoteCards";

interface Note {
  id: String;
  date: Date;
  text: String;
}

export const NotesContainer = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  function onNewNoteSaved(text: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      text,
    };

    setNotes([newNote, ...notes]);
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
