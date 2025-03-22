import { useState } from "react";
import SearchInput from "./components/custom/search";
import GenreCard from "./components/custom/genre-card";
import BookCard from "./components/custom/book-card";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="w-[300px] ml-10 mt-5 flex flex-col gap-5">
      <SearchInput value={value} onChange={(value) => setValue(value)} />
      <GenreCard genre="GENRE" />
      <BookCard
        image=""
        title="The Old man and the sea"
        author="Charles Dickens"
      />
    </div>
  );
}

export default App;
