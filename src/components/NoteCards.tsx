type  NoteCardsProps = {
    noteDate: string;
    text: string;
} 

export const NoteCards = (props: NoteCardsProps) => 
    <button className="rounded-md text-left bg-slate-800 p-5  outline-none space-y-3 overflow-hidden relative hover: ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-200">
            {props.noteDate}
            </span>
        <p className="text-sm leading-6 text-slate-300">
            {props.text}
            </p>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
