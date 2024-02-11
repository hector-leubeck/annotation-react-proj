import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export const NewNoteCard = () => (
  <Dialog.Root>
    <Dialog.Trigger className="rounded-md flex flex-col text-left bg-slate-700 p-5 gap-3">
      <span className="text-sm font-medium text-slate-200">Adicionar Nota</span>
      <p className="text-sm leading-6 text-slate-400">
        Grave uma nota em audio que será convertida automaticamente para texto.
      </p>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="inset-0 fixed bg-black/60 z-[2]" />
      <Dialog.Content className="fixed  overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vh] max-w-[640px] w-full bg-slate-700 rounded-md flex flex-col outline-none z-10">
        <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 outline-none hover:text-slate-100 hover:bg-slate-800/70">
          <X className="size-5 " />
        </Dialog.Close>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <span className="text-sm font-medium text-slate-200">
            Adicionar nova nota
          </span>
          <p className="text-sm leading-6 text-slate-300">
            Comece a{" "}
            <button
              type="button"
              className="text-lime-400 font-medium hover:underline"
            >
              gravar uma nota em audio
            </button>{" "}
            ou{" "}
            <button
              type="button"
              className="text-lime-400 font-medium hover:underline"
            >
              use somente texto
            </button>
            .
          </p>
        </div>
        <button
          type="button"
          className="w-ful bg-lime-400 py-4 text-center text-sm text-lime-950 font-medium outline-none hover:bg-lime-500"
        >
          Salvar Nota
        </button>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
