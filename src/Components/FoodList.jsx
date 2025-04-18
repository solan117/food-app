import FoodItem from "./FoodItem.jsx";

export default function FoodList({ foodData, setFoodData }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </div>
  );
}
