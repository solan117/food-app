import { useEffect, useState } from "react";
import styles from "../CSS/search.module.css";
import { API_CONFIG } from "../config.js";

const apiKey = API_CONFIG.API_KEY;
const URL = API_CONFIG.BASE_URL;

export default function Search({ setFoodData }) {
  const [query, setQuery] = useState("Paneer");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(
        `${URL}/complexSearch?query=${query}&apiKey=${apiKey}`,
      );
      const data = await res.json();
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
