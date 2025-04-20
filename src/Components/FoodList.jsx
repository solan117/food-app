import FoodItem from "./FoodItem.jsx";
import styles from "../CSS/foodlist.module.css";

export default function FoodList({ foodData, setFoodId }) {
  return (
    <div className={styles.container}>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} setFoodId={setFoodId} />
      ))}
    </div>
  );
}
