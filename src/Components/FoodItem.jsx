import styles from "../CSS/fooditem.module.css";

export default function FoodItem({ food }) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={food.image} alt={food.title} />
      <h1 className={styles.title}>{food.title}</h1>
      <button className={styles.button} onClick={() => {}}>
        View Recipe
      </button>
    </div>
  );
}
