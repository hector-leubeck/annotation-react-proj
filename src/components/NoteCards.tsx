import * as Dialog from "@radix-ui/react-dialog";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { X } from "lucide-react";

type NoteCardsProps = {
  note: {
    date: Date;
    text: String;
  };
};

export const NoteCards = ({ note }: NoteCardsProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md text-left bg-slate-800 p-5  outline-none flex flex-col gap-3 overflow-hidden relative hover: ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-200">
          {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}
        </span>
        research
        <p className="text-sm leading-6 text-slate-300">{note.text}</p>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/60 z-[2]" />
        <Dialog.Content className="fixed  overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vh] max-w-[640px] w-full bg-slate-700 rounded-md flex flex-col outline-none z-10">
          <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 outline-none hover:text-slate-100 hover:bg-slate-800/70">
            <X className="size-5 " />
          </Dialog.Close>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <span className="text-sm font-medium text-slate-200">
              {formatDistanceToNow(note.date, {
                locale: ptBR,
                addSuffix: true,
              })}
            </span>
            <p className="text-sm leading-6 text-slate-300">{note.text}</p>
          </div>
          <button
            type="button"
            className="w-ful bg-slate-800 py-4 text-center text-sm text-red-400 font-medium outline-none hover:underline"
          >
            Excluir Nota
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
