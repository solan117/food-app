import FoodItem from "./FoodItem.jsx";
import styles from "../CSS/foodlist.module.css";

export default function FoodList({ foodData, setFoodId }) {
  if (!Array.isArray(foodData)) {
    return <p>Food data is unavailable.</p>;
  }

  return (
    <div className={styles.container}>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} setFoodId={setFoodId} />
      ))}
    </div>
  );
}
