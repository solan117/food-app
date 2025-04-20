import styles from "../CSS/Ingredients.module.css";

export default function Ingredients({ item }) {
  return (
    <div className={styles.ingredientItem} key={item.id}>
      <img
        src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
        alt={item.name}
        className={styles.ingredientImage}
      />
      <p className={styles.ingredientName}>
        {item.name} - {item.amount} {item.unit}
      </p>
    </div>
  );
}
