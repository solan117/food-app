import Search from "./Components/Search.jsx";
import { useState } from "react";
import FoodList from "./Components/FoodList.jsx";
import Nav from "./Components/Nav.jsx";
import styles from "./CSS/app.module.css";

function App() {
  const [foodData, setFoodData] = useState([]);

  return (
    <div className={styles.container}>
      <header>
        <Nav />
      </header>

      <section>
        <Search foodData={foodData} setFoodData={setFoodData} />
      </section>

      <section>
        <FoodList foodData={foodData} setFoodData={setFoodData} />
      </section>
    </div>
  );
}

export default App;
