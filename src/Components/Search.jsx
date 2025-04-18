import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <button onClick={() => {}}> Submit </button>
    </div>
  );
}
