import Search from "./Components/Search.jsx";
import { useState } from "react";
import FoodList from "./Components/FoodList.jsx";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <>
      <div>
        <Search foodData={foodData} setFoodData={setFoodData} />
        <FoodList foodData={foodData} setFoodData={setFoodData} />
      </div>
    </>
  );
}

export default App;
