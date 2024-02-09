import { NewNoteCard } from "./NewNoteCard"
import { NoteCards } from "./NoteCards"

export const NotesContainer = () => 
    <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard />
        <NoteCards noteDate="há 2 dias" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, eligendi laborum! Reiciendis eligendi magnam optio assumenda laborum aliquid molestiae officiis hic praesentium sequi eius ex quam, sint et non voluptate?"/>

        <NoteCards noteDate="há 4 dias" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, eligendi laborum! Reiciendis eligendi magnam optio assumenda laborum aliquid molestiae officiis hic praesentium sequi eius ex quam, sint et non voluptate?"/>

        <NoteCards noteDate="há 5 dias" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, eligendi laborum! Reiciendis eligendi magnam optio assumenda laborum aliquid molestiae officiis hic praesentium sequi eius ex quam, sint et non voluptate?"/>
        <NoteCards noteDate="há 5dias" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, eligendi laborum! Reiciendis eligendi magnam optio assumenda laborum aliquid molestiae officiis hic praesentium sequi eius ex quam, sint et non voluptate?"/>
        <NoteCards noteDate="há 1 semana" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, eligendi laborum! Reiciendis eligendi magnam optio assumenda laborum aliquid molestiae officiis hic praesentium sequi eius ex quam, sint et non voluptate?"/>
        <NoteCards noteDate="há 6 mêses" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, eligendi laborum! Reiciendis eligendi magnam optio assumenda laborum aliquid molestiae officiis hic praesentium sequi eius ex quam, sint et non voluptate?"/>
    </div>

