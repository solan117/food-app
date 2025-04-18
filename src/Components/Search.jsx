import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "cf1a95fb73de4c1db8bc69826c4c8735";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
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
