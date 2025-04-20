// import styles from "../CSS/fooditem.module.css";
//
// export default function FoodItem({ food }) {
//   async function fetchFoodDetails(id) {
//     const res = await fetch(
//       `https://api.spoonacular.com/recipes/${id}/information?apiKey=e3299e71a50149968f1cdbae1319d789`,
//     );
//     const data = await res.json();
//     console.log(data.instructions);
//   }
//
//   return (
//     <div className={styles.card}>
//       <img className={styles.image} src={food.image} alt={food.title} />
//       <h1 className={styles.title}>{food.title}</h1>
//       <button
//         className={styles.button}
//         onClick={() => {
//           console.log(food.id);
//           fetchFoodDetails(food.id);
//         }}
//       >
//         View Recipe
//       </button>
//     </div>
//   );
// }

import { useState } from "react";
import styles from "../CSS/fooditem.module.css";

export default function FoodItem({ food, setFoodId }) {
  const [recipe, setRecipe] = useState(null);
  const [showRecipe, setShowRecipe] = useState(false);

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
