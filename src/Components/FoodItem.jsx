import { useState } from "react";
import styles from "../CSS/fooditem.module.css";

export default function FoodItem({ food, setFoodId }) {
  const [recipe] = useState(null);
  const [showRecipe] = useState(false);

  return (
    <div className={styles.card}>
      <img className={styles.image} src={food.image} alt={food.title} />
      <h1 className={styles.title}>{food.title}</h1>
      <button
        className={styles.button}
        onClick={() => {
          console.log();
          setFoodId(food.id);
        }}
      >
        View Recipe
      </button>

      {showRecipe && recipe && (
        <div className={styles.recipeBox}>
          <h2>{showRecipe}</h2>
          <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
        </div>
      )}
    </div>
  );
}
