import { Key, useState } from "react";
import { NewNoteCard } from "./NewNoteCard";
import { NoteCards } from "./NoteCards";

interface ResearchProps {
  research: string;
}

interface Note {
  id: String;
  date: Date;
  text: String;
}

export const NotesContainer = ({ research }: ResearchProps) => {
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

  const filteredNotes =
    research !== ""
      ? notes.filter((note) =>
          note.text.toLocaleLowerCase().includes(research.toLocaleLowerCase())
        )
      : notes;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
      <NewNoteCard onNewNoteSaved={onNewNoteSaved} />

      {filteredNotes.map((note) => (
        <NoteCards key={note.id as Key} note={note} />
      ))}
    </div>
  );
};
