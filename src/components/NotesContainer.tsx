import { NewNoteCard } from "./NewNoteCard"
import { NoteCards } from "./NoteCards"

const dateExample = {
    date: new Date(),
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minus reiciendis velit sunt quia fugiat, sed distinctio magnam dolorum nam id laudantium nostrum, reprehenderit eaque ducimus molestias tempore aut iusto.Pariatur laboriosam voluptatem nihil et nulla molestiae eaque unde deleniti ab aliquid facere soluta necessitatibus consequuntur, doloremque distinctio aspernatur excepturi neque? Nobis porro voluptatum dolor cum perferendis consectetur in molestias."
}

export const NotesContainer = () => 
    <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard />
        <NoteCards note={dateExample}/>
        <NoteCards note={dateExample}/>
        <NoteCards note={dateExample}/>
        <NoteCards note={dateExample}/>
        <NoteCards note={dateExample}/>
        <NoteCards note={dateExample}/>
        <NoteCards note={dateExample}/>
        <NoteCards note={dateExample}/>
    </div>

