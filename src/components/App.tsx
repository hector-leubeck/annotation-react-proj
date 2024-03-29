import { NotesContainer } from "./NotesContainer";
import logo from "../assets/logo-nlw-blkngry.svg";
import { ChangeEvent, useState } from "react";

export const App = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value;

    setSearch(searchQuery);
  };

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 px-5 md:px-0">
      <>
        <img src={logo} alt="NLW Expert" />
        <form className="w-full">
          <input
            type="text"
            placeholder="Busque em suas notas..."
            className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
            onChange={handleSearch}
          />
        </form>

        <div className="h-px bg-slate-700" />
      </>
      <NotesContainer research={search} />
    </div>
  );
};
