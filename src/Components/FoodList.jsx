import FoodItem from "./FoodItem.jsx";
import styles from "../CSS/foodlist.module.css";

export default function FoodList({ foodData, setFoodData }) {
  return (
    <div className={styles.container}>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </div>
  );
}
