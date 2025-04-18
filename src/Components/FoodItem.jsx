export default function FoodItem({ food }) {
  return (
    <div>
      <img className="food-img" src={food.image} />
      <h1>{food.title}</h1>
      <button onClick={() => {}}>View Recipe</button>
    </div>
  );
}
