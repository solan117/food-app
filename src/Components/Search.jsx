import { useEffect, useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    function demo() {
      console.log("Demo function execute!");
    }
    demo();
  }, [query]);

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
