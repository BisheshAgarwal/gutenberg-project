import { useState } from "react";
import SearchInput from "./components/custom/search";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="w-[300px] ml-10 mt-5">
      <SearchInput value={value} onChange={(value) => setValue(value)} />
    </div>
  );
}

export default App;
