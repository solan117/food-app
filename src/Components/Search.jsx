import { useEffect, useState } from "react";
import styles from "../CSS/search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "cf1a95fb73de4c1db8bc69826c4c8735";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("paneer");

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
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search for food"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <button className={styles.button}>Search</button>
    </div>
  );
}
