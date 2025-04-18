import Search from "./Components/Search.jsx";
import { useState } from "react";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <>
      <div>
        <Search foodData={foodData} setFoodData={setFoodData} />
        {foodData.map((food) => (
          <h1>{food.title}</h1>
        ))}
      </div>
    </>
  );
}

export default App;
