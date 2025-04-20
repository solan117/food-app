import styles from "../CSS/foodetail.module.css";
import { useEffect, useState } from "react";

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

  return (
    <div className={styles.container}>
      <div>
        <span>
          <strong>
            Food Detail Food Id : {foodId}
            Food Name: {food.title}
          </strong>
        </span>
        <img src={food.image} alt={food.title} />
      </div>
      <span>
        <strong>Server: {food.servings}</strong>
      </span>
      <span>
        <strong>{food.readyInMinutes} Minutes</strong>
      </span>
      <span>{food.vegetarian ? "vegetarian" : "non-vegetarian"}</span>
      <span>{food.vegan ? "Vegan" : ""} </span>
      <span>{food.pricePerServing / 10} Per Serving</span>
      <div>
        {isLoading ? "Loading..." : ""}
        <h2>Instructions</h2>
        <p dangerouslySetInnerHTML={{ __html: food.instructions }}></p>
      </div>
    </div>
  );
}
