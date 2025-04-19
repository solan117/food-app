import styles from "../CSS/fooditem.module.css";

export default function FoodItem({ food }) {
  async function fetchFoodDetails(id) {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=cf1a95fb73de4c1db8bc69826c4c8735`,
    );
    const data = await res.json();
    console.log(data.instructions);
  }

  return (
    <div className={styles.card}>
      <img className={styles.image} src={food.image} alt={food.title} />
      <h1 className={styles.title}>{food.title}</h1>
      <button
        className={styles.button}
        onClick={() => {
          console.log(food.id);
          fetchFoodDetails(food.id);
        }}
      >
        View Recipe
      </button>
    </div>
  );
}
