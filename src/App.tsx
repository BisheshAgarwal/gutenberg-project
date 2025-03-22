import { useState } from "react";
import SearchInput from "./components/custom/search";
import GenreCard from "./components/custom/genre-card";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="w-[300px] ml-10 mt-5 flex flex-col gap-5">
      <SearchInput value={value} onChange={(value) => setValue(value)} />
      <GenreCard genre="GENRE" />
    </div>
  );
}

export default App;
