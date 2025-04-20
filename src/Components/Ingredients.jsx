import styles from "../CSS/Ingredients.module.css";
import IngredientItem from "../Components/IngredientItem.jsx";
export default function Ingredients({ food }) {
  if (!Array.isArray(food.extendedIngredients)) {
    return <p>Loading ingredients...</p>;
  }

  return (
    <div className={styles.ingredients}>
      <h2>🥕 Ingredients</h2>
      <div className={styles.ingredientGrid}>
        {food.extendedIngredients.map((item) => (
          <IngredientItem item={item} />
        ))}
      </div>
    </div>
  );
}
