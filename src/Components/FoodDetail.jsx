import styles from "../CSS/foodetail.module.css";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import Ingredients from "./Ingredients.jsx";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFoodDetails(foodId) {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/${foodId}/information?apiKey=e3299e71a50149968f1cdbae1319d789`,
      );
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFoodDetails(foodId);
  }, [foodId]);

  // Fallback: Convert plain instructions into numbered list
  function renderInstructions(instructions) {
    if (!instructions) return <p>No instructions provided.</p>;

    // If it's HTML (contains <ol> or <li>), parse safely
    if (instructions.includes("<li>") || instructions.includes("<ol>")) {
      return parse(instructions);
    }

    // If it's plain text (e.g. multiple paragraphs or dot-separated)
    const steps = instructions
      .split(/\. |\n+/)
      .map((step) => step.trim())
      .filter((step) => step.length > 0);

    return (
      <ol className={styles.instructionsList}>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{food.title}</h2>
        <img className={styles.image} src={food.image} alt={food.title} />
      </div>

      <div className={styles.details}>
        <span>
          🍽️ Servings: <strong>{food.servings}</strong>
        </span>
        <span>
          ⏱️ Time: <strong>{food.readyInMinutes} mins</strong>
        </span>
        <span>{food.vegetarian ? "🌱 Vegetarian" : "🍖 Non-Vegetarian"}</span>
        {food.vegan && <span>🥦 Vegan</span>}
        <span>💲 {food.pricePerServing / 10} Per Serving</span>
      </div>
      <Ingredients food={food} />
      <div className={styles.instructions}>
        <h3>📝 Instructions</h3>
        {isLoading ? <p>Loading...</p> : renderInstructions(food.instructions)}
      </div>
    </div>
  );
}
